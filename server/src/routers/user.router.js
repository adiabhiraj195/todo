import { Router } from "express";
import userController from "../controller/user.controller.js";

const user = Router();

user.post("/", userController.register);
user.post("/login", userController.login)
export default user;