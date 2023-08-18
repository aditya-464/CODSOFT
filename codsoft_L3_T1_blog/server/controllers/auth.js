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
        savedNewUser.password = "";
        return res.status(200).json({ savedNewUser });

    } catch (error) {
        res.status(500).json({ error: error.message });
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
        user.password = "";
        return res.status(200).json({ user });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateDetails = async (req, res) => {
    try {
        const { userId, fullname, username, email, location, bio } = req.body;
        const prevUser = await User.findById(userId);
        if (!prevUser) {
            return res.status(404).json({ message: "User does not exist!" });
        }
        const newUser = await User.findByIdAndUpdate(
            userId,
            {
                fullname,
                username,
                email,
                location,
                bio
            },
            {
                new: true
            }
        );
        if (!newUser) {
            return res.status(400).json({ message: "Error ocuured in updating user details!" });
        }
        newUser.password = "";
        return res.status(200).json({ newUser });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updatePassword = async (req, res) => {
    try {
        const { userId, password, newPassword } = req.body;
        if (!password || !newPassword) {
            return res.status(400).json({ message: "Invalid request!" });
        }
        const user = await User.findById(userId);
        if (!user) {
            return res.status(400).send("User does not exist!");
        }
        const matchPassword = await bcrypt.compare(password, user.password);
        if (!matchPassword) {
            return res.status(400).send("Invalid Credentials!");
        }

        if (password === newPassword) {
            return res.status(400).json({ message: "New password cannot be same as previous password!" })
        }
        const salt = await bcrypt.genSalt(11);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        const newUser = await User.findByIdAndUpdate(
            userId,
            {
                password: hashedPassword
            },
            {
                new: true
            }
        );
        newUser.password = "";
        return res.status(200).json({ newUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

