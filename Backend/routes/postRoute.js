import express from "express";
import {
  getPostFromFrontend,
  postAddComment,
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
router.route("/comment").post(authorizationMiddleware, postAddComment);
export default router;
