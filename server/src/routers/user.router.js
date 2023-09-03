import { Router } from "express";
import userController from "../controller/user.controller.js";
import userValidator from "../validator/user.validator.js";
import { authenticate } from '../middleware/authenticate.js';

const user = Router();

user.post("/", userValidator.register, userController.register);
user.post("/login",userValidator.login, userController.login);
user.delete("/logout",authenticate, userController.logout);

export default user;