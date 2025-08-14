import express from "express";
import { registerUSer, loginUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", registerUSer);
userRouter.post("/login", loginUser);
export default userRouter;
