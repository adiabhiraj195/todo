import { validationResult } from "express-validator";
import userService from "../service/userService.js";

class UserController {
    register = async (req, res) => {
        const err = validationResult(req);
        if (!err.isEmpty()) return res.status(400).json(err);

        const { name, email, password1 } = req.body;

        await userService.createUser(name, email, password1);

        return res.status(200).json({
            status: "created"
        });
    }

    login = async (req, res) => {
        const err = validationResult(req);
        if (!err.isEmpty()) return res.status(400).json(err);

        const { email, password } = req.body;

        const user = await userService.findUserByEmail(email);
        if (!user) return res.status(400).json({
            status: "User not found"
        })

        const checkPassword = await userService.checkPassword(password, user.password);
        if(!checkPassword) return res.status(400).json({
            status: "Wrong Password"
        })

        const response = await userService.loginResponse(user);

        return res.status(200).json(response);
    }
}

const userController = new UserController();

export default userController;