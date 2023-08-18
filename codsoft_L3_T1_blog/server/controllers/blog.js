import Blog from "../models/blog.js"

export const createBlog = async (req, res) => {
    try {
        const { userId, title, description, pictureId, picturePath } = req.body;
        if (!userId || !title || !description || !pictureId || !picturePath) {
            return res.status(400).json({ message: "Please fill all the fields!" });
        }

        const newBlog = new Blog({
            userId,
            title,
            description,
            pictureId,
            picturePath
        });

        const savedNewBlog = await newBlog.save();
        return res.status(200).json({ savedNewBlog });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export const getAllBlogs = async (req, res) => {
    try {
        const allBlogs = await Blog.find();
        return res.status(200).json({ allBlogs });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export const getMyBlogs = async (req, res) => {
    try {
        const { userId } = req.body;
        if (!userId) {
            return res.status(400).json({ message: "Invalid request!" });
        }
        const myBlogs = await Blog.find({ userId: userId });
        return res.status(200).json({ myBlogs });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export const getBlog = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "Invalid request!" });
        }
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(400).json({ message: "Invalid request!" });
        }
        return res.status(200).json({ blog });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId, title, description, pictureId, picturePath } = req.body;
        if (!userId || !title || !description || !pictureId || !picturePath) {
            return res.status(400).json({ message: "Please fill all the fields!" });
        }
        if (!id) {
            return res.status(400).json({ message: "Invalid request!" });
        }
        const updatedBlog = await Blog.findByIdAndUpdate(
            id,
            {
                userId,
                title,
                description,
                pictureId,
                picturePath
            },
            {
                new: true
            }
        );
        if (!updatedBlog) {
            return res.status(400).json({ message: "Invalid request!" });
        }
        return res.status(200).json({ updatedBlog });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "Invalid request!" });
        }
        const deletedBlog = await Blog.findByIdAndDelete(id);
        if (deletedBlog !== "") {
            return res.status(404).json({ message: "Error occurred in deleting blog!" })
        }
        return res.status(200).json({ deleteBlog });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export const addComment = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId, fullname, comment } = req.body;
        if (!userId || !fullname || !comment || !id) {
            return res.status(400).json({ message: "Invalid request!" });
        }

        const getBlog = await Blog.findById(id);
        if (!getBlog) {
            return res.status(400).json({ message: "Invalid request!" });
        }
        const commentsArray = getBlog.comments;
        commentsArray.push({
            userId,
            fullname,
            comment
        })

        const updatedBlog = await Blog.findByIdAndUpdate(
            id,
            {
                comments: commentsArray
            },
            {
                new: true
            }
        )

        if (!updatedBlog) {
            return res.status(400).json({ message: "Invalid request!" });
        }
        return res.status(200).json({ updatedBlog });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}