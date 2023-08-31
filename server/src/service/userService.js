import jwt from "jsonwebtoken";
import { compare, hash, genSalt } from "bcrypt";
import User from "../db/user.modle.js";

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
        const accessToken = jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET);

        user.isLogedin = true;
        user.save();

        return { accessToken };
    }
}

const userService = new UserService();

export default userService;