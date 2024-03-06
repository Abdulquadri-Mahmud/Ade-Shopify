import express from "express";
import { signup } from "../controller/user.controller.js";

const app = express();

app.post('/signup',signup);

export default app;