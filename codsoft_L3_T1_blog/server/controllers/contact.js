import Contact from "../models/contact.js"

export const contact = async(req,res)=>{
    try {
        const {email, message} = req.body;
        if(!email || !message){
            return res.status(400).json({error : "Please fill all fields!"});
        }

        const contactMessage = new Contact({
            email, message, date : new Date()
        });
        const savedMessage = await contactMessage.save();
        return res.status(200).json({message : "Message sent successfully!"});
    } catch (error) {
        return res.status(500).json({error : error.message});
    }
}
