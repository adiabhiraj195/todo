import { Router } from "express";
import { authenticate } from '../middleware/authenticate.js';
import dataController from "../controller/data.controller.js";
const data = Router();

data.get("/", authenticate, dataController.fetchData);  
data.post("/create", authenticate, dataController.createCard);
data.post("/task", authenticate, dataController.addTask)

export default data;