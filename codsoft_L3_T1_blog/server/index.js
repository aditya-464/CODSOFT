import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import blogRoutes from "./routes/blog.js";
import contactRoutes from "./routes/contact.js";
import multer from "multer";
import { fileURLToPath } from 'url'
import path from 'path'
import * as fs from 'fs';
import fireApp from "./fireConfig.js";
import { getStorage, ref, getDownloadURL, uploadBytesResumable, deleteObject } from "firebase/storage";
import Blog from "./models/blog.js";


dotenv.config({ path: "./.env" });

const app = express();
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(cors());
app.use(express.json({
    limit: "10mb",
    extended: true
}));
app.use(express.urlencoded({
    limit: "10mb",
    extended: true
}));
app.use("/auth", authRoutes);
app.use("/blog", blogRoutes);
app.use("/contact", contactRoutes);


const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, __dirname + '/files');
    },
    filename: function (req, file, callback) {
        const filename = Date.now() + "   " + file.originalname;
        callback(null, filename);
    }
})

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 10485760 // Defined in bytes (1 Mb)
    },
})

const fireStorage = getStorage();

app.post('/blog/ok', upload.single("file"), async (req, res) => {
    try {
        const { title, description, userId } = req.body;
        // firebase image upload
        console.log(req.file);
        console.log(title, description)

        const storageRef = ref(fireStorage, `files/${req.file.filename}`);
        const metadata = {
            contentType: req.file.mimetype,
        };


        const snapshot = await uploadBytesResumable(storageRef, req.file.buffer, metadata);
        const downloadURL = await getDownloadURL(snapshot.ref);

        const newBlog = new Blog({
            userId: "aditya",
            title,
            description,
            pictureId: req.file.filename,
            picturePath: downloadURL,
            comments: []
        });

        const savedNewBlog = await newBlog.save();
        res.status(200).json({ savedNewBlog });

        fs.unlink(req.file.path, () => {
            console.log("Deleted the file");
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error });
    }

});



// Connect to MongoDB
const DB = process.env.MONGO_URL;
mongoose.connect(DB).then(() => {
    console.log("Connection with Database is Successful!");
}).catch(() => {
    console.log("Connection with Database Failed!");
})

// Starting server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
})