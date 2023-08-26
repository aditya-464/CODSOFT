import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    },
    {
        collection: 'contact'
    }
);

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;