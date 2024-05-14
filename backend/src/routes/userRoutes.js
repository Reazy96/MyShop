import express from "express";

import { UserController } from "../controller/userController.js";

export const userRouter = express
  .Router()

  .post("/register", UserController.registerUserCon)
  .post("/verifyEmail", UserController.postVerifyUserEmailCon)
  .post("/login", UserController.postLoginUserCon);
