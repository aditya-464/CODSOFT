import bcrypt from "bcrypt";
import User from "../models/user.js"

export const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).send("Please fill up all fields!");
        }
        const usernameExist = await User.findOne({ username: username });
        if (usernameExist) {
            return res.status(400).send("Username already exists!");
        }
        const emailExist = await User.findOne({ email: email });
        if (emailExist) {
            return res.status(400).send("Email already exists!");
        }
        const salt = await bcrypt.genSalt(11);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            username, email, password: hashedPassword,
        });
        const savedNewUser = await newUser.save();
        return res.status(200).json({ savedNewUser });

    } catch (error) {
        res.status(500).json({ error: error });
    }
};


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send("Please fill up all fields!");
        }
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(400).send("User does not exist!");
        }
        const matchPassword = await bcrypt.compare(password, user.password);
        if (!matchPassword) {
            return res.status(400).send("Invalid Credentials!");
        }
        return res.status(200).json({ user });

    } catch (error) {
        res.status(500).json({ error: error });
    }
};

