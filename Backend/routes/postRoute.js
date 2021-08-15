import express from "express";
import {
  getPostFromFrontend,
  postLikeUnlike,
  sendPostToFrontend,
} from "../controllers/postController.js";
import authorizationMiddleware from "../middlewares/authMidlleware.js";

const router = express.Router();

router
  .route("/")
  .post(authorizationMiddleware, getPostFromFrontend)
  .get(authorizationMiddleware, sendPostToFrontend);

router.route("/likeunlike").post(authorizationMiddleware, postLikeUnlike);
export default router;
