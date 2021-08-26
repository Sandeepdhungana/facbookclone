import express from "express";
import { findFriend } from "../controllers/findFriendController.js";
import authorizationMiddleware from "../middlewares/authMidlleware.js";

const router = express.Router();

router.route("/").get(authorizationMiddleware, findFriend);

export default router;
