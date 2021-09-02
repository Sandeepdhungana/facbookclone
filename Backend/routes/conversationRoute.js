import express from "express";
import {
  createConversation,
  getConversation,
} from "../controllers/conversationController.js";

import authorizationMiddleware from "../middlewares/authMidlleware.js";

const router = express.Router();

router.route("/create").post(authorizationMiddleware, createConversation);
router.route("/get").get(authorizationMiddleware, getConversation);

export default router;
