import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    const { email, password } = req.body;
    // console.log(email, password);
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exist." });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await User.create({ email, password: hashedPassword });
        const token = jwt.sign({ email: result.email, id: result._id }, "bhavesh", { expiresIn: "1d" });
        return res.status(200).json({ result, token });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const findUser = await User.findOne({ email });
        if (!findUser) {
            return res.status(404).json({ message: "User doesn't exist exist." });
        }
        const isPasswordCorrect = await bcrypt.compare(password, findUser.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials." });

        const token = jwt.sign({ email: findUser.email, id: findUser._id }, "bhavesh", { expiresIn: "1d" });

        res.status(200).json({ result: findUser, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
    }

}