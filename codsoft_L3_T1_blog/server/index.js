import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({ path: "./.env" });

const app = express();

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