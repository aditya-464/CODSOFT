import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        fullname: {
            type: String,
            min: 2,
            default: "Full Name",
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 6,
            max: 20,
        },
        username: {
            type: String,
            required: true,
            unique: true,
        },
        pictureId: {
            type: String,
            default: "",
        },
        picturePath: {
            type: String,
            default: "",
        },
        bio: {
            type: String,
            required: true,
            min: 2,
            default: "Bio",
        },
        location: {
            type: String,
            default: "Location",
        },
        blogs: {
            type: Array,
            default: [],
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