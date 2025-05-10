import express from "express";
import {
  adminLogin,
  loginUser,
  registerUser,
  getCurrentUser
} from "../controllers/userController.js";
import authUser from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin", adminLogin);
userRouter.get("/current-user", authUser, getCurrentUser);

export default userRouter;
