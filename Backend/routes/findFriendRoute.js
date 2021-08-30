import express from "express";
import {
  confirmFriendRequest,
  findFriend,
  removeFriend,
  cancelFriendRequest,
  sendFriendRequest,
  deleteFriendRequest,
  myFriend
} from "../controllers/findFriendController.js";
import authorizationMiddleware from "../middlewares/authMidlleware.js";

const router = express.Router();

router.route("/").get(authorizationMiddleware, findFriend);
router.route("/myfriend").get(authorizationMiddleware, myFriend);
router.route("/sendrequest").post(authorizationMiddleware, sendFriendRequest);
router
  .route("/confirmrequest")
  .post(authorizationMiddleware, confirmFriendRequest);
router
  .route("/cancelrequest")
  .post(authorizationMiddleware, cancelFriendRequest);
router
  .route("/deleterequest")
  .post(authorizationMiddleware, deleteFriendRequest);
router.route("/removefriend").post(authorizationMiddleware, removeFriend);

export default router;
