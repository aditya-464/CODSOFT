import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        fullname: {
            type: String,
            required: true,
            min: 2,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
        },
        bio: {
            type: String,
            required: true,
            min: 2,
        },
        location: {
            type: String,
        },
        blogs: {
            type : Array,
            default : [],
        },
    },
    {
        timestamps: true
    },
    {
        collection: 'users'
    }
);

const User = mongoose.model("User", userSchema);
export default User;