import mongoose from "mongoose";
const blogSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        comments: {
            type: Array,
            default: [],
        },
    },
    {
        timestamps: true
    },
    {
        collection: "blogs"
    },
);

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;