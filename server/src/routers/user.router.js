import { Router } from "express";
import userController from "../controller/user.controller.js";
import userValidator from "../validator/user.validator.js";

const user = Router();

user.post("/", userValidator.register, userController.register);
user.post("/login",userValidator.login, userController.login);

export default user;