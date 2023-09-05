import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import cors from "cors";
import morgan from "morgan";

import router from "./routers/index.router.js";

const app = express();
const FRONT_END_URL = process.env.FRONT_END_URL;
// console.log(FRONT_END_URL);

app.use(morgan("combined"));
app.use(express.json());
app.use(cors({
    origin: [FRONT_END_URL]
    // origin: "http://localhost:3000"
}));

app.use(router);

export default app;