import express from "express";
import {
  loginUser,
  registerUser,
  updateProfile,
} from "../controllers/userController.js";
import authorizationMiddleware from "../middlewares/authMidlleware.js";

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/updateprofile").post(authorizationMiddleware, updateProfile);

export default router;
