import express from "express";
import { addComment, sendComment } from "../controllers/commentController.js";
import authorizationMiddleware from "../middlewares/authMidlleware.js";

const router = express.Router();

router.route("/").post(authorizationMiddleware, addComment);
router.route("/:postId").get(authorizationMiddleware, sendComment);
// .delete(authorizationMiddleware, postDeleteComment);

export default router;
