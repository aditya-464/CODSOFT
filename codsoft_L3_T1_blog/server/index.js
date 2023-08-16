import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/auth.js";

dotenv.config({ path: "./.env" });

const app = express();

app.use(cors());
app.use(express.json({
    limit: "30mb",
    extended: "true"
}));
app.use("/auth", authRoutes)




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