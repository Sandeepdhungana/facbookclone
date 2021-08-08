import express from "express";
import {
  getPostFromFrontend,
  sendPostToFrontend,
} from "../controllers/postController.js";
import authorizationMiddleware from "../middlewares/authMidlleware.js";

const router = express.Router();

router
  .route("/")
  .post(authorizationMiddleware, getPostFromFrontend)
  .get(authorizationMiddleware, sendPostToFrontend);

export default router;
