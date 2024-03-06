import bcryptjs from "bcryptjs";
import User from "../models/user.models.js";

export const signup = async (req, res, next) => {
    const {username, country, state, fullAddress, email, mobile, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({username, country, state, fullAddress, email, mobile, password : hashedPassword});

    try {
        await newUser.save();
        res.status(200).json('User created successfully!');
    } catch (error) {
        next(error, error.message);
    }
}

export const signin = (req, res, next) => {

}