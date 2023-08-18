import express from "express";
import { addComment, createBlog, deleteBlog, getAllBlogs, getBlog, getMyBlogs, updateBlog } from "../controllers/blog.js";

const router = express.Router();

router.post("/create", createBlog);
router.get("/all", getAllBlogs);
router.get("/personal", getMyBlogs);
router.get("/:id", getBlog);
router.patch("/update/:id", updateBlog);
router.delete("/delete/:id", deleteBlog);
router.patch("/comment/:id", addComment);

export default router;
