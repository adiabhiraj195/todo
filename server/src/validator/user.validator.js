import { body } from "express-validator";
import userService from "../service/userService.js";

class UserValidator {
    register = [
        body("email")
            .isEmail()
            .normalizeEmail()
            .withMessage("Enter a valid email"),
        body("email")
            .custom(async (value) => {
                const user = await userService.findUserByEmail(value);
                if (user) {
                    return Promise.reject('User with that email already exists.');
                }
                return true;
            }),
        body("password1")
            .isLength({ min: 8, max: 24 })
            .withMessage("Password must be between 8 to 25 characters."),
        body("password2")
            .custom((value, { req }) => {
                if (value !== req.body.password1) {
                    throw new Error('Passwords must match.');
                }
                return true;
            })
    ];

    login = [
        body("email")
            .isEmail()
            .normalizeEmail()
            .withMessage("Enter a valid Email"),
        body("email")
            .custom(async (value) => {
                const user = await userService.findUserByEmail(value);
                if (!user) {
                    throw new Error("User not found");
                };
                return true;
            }),
        body("password")
            .exists()
            .withMessage('Must provide a password.'),
    ]
}

const userValidator = new UserValidator();

export default  userValidator;