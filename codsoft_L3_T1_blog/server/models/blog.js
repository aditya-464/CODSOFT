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
        category : {
            type : String,
            required : true
        },
        pictureId: {
            type: String,
            default: "",
        },
        picturePath: {
            type: String,
            default: "",
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