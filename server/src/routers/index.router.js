import { Router } from "express";
import user from "./user.router.js";
import data from "./data.router.js";

const router = Router();

router.use("/user", user);
router.use("/data", data);

export default router;