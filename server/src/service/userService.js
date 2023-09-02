import jwt from "jsonwebtoken";
import { compare, hash, genSalt } from "bcrypt";
import User from "../db/user.modle.js";
import mongoose from "mongoose";

class UserService {
    createUser = async (name, email, password) => {
        const salt = await genSalt();
        const hashedPassword = await hash(password, salt);
        const verificationToken = jwt.sign({ email }, process.env.VERIFY_EMAIL_SECRET);
        await User.create({
            name: name,
            email: email,
            password: hashedPassword,
            verificationToken: verificationToken
        });
        console.log("userCreated");
    }

    findUserByEmail = async (email) => {
        return await User.findOne({ email })
        //lemite data from database
    }

    checkPassword = async (password, encryptedPassword) => {
        return await compare(password, encryptedPassword);
    }

    loginResponse = async (user) => {
        const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET);

        user.isLogedin = true;
        user.save();

        return { accessToken };
    }

    findDataById = async (cardId) => {
        const ObjectId = mongoose.Types.ObjectId;
        return await User.find({ _id: new ObjectId(cardId) });
    }
}

const userService = new UserService();

export default userService;