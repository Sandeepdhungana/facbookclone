import express from "express";
import {
  getPostFromFrontend,
  postAddComment,
  postLikeUnlike,
  sendPostToFrontend,
  sendOnePostToFrontend,
} from "../controllers/postController.js";
import authorizationMiddleware from "../middlewares/authMidlleware.js";

const router = express.Router();

router
  .route("/")
  .post(authorizationMiddleware, getPostFromFrontend)
  .get(authorizationMiddleware, sendPostToFrontend);

router.route("/likeunlike").post(authorizationMiddleware, postLikeUnlike);
router.route("/:postId").get(authorizationMiddleware, sendOnePostToFrontend);

export default router;
