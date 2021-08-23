import express from "express";
import { getUserProfile } from "../controllers/profileController.js";
import authorizationMiddleware from "../middlewares/authMidlleware.js";

const router = express.Router();

router.route("/:profileId").get(authorizationMiddleware, getUserProfile);

export default router;
