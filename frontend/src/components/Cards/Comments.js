import React, { useEffect } from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import socket from "../../socket";
import { SOCKET_COMMENT_RECEIVED } from "../../constants/socketConstants";
import { useDispatch } from "react-redux";

const Comments = ({
  comments: {
    comment,
    commentedBy: { firstname, surname, profilePic },
  },
  postId,
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Inside use effect in comments");
    socket.on("COMMENT_SENT", (comments) => {
      console.log(comments);
      dispatch({
        type: SOCKET_COMMENT_RECEIVED,
        payload: {
          comments,
          postId,
        },
      });
    });

    return () => {
      socket.off("COMMENT_SENT");
    };
  }, [dispatch, postId]);
  return (
    <div className="comments">
      <div className="comments__profilepic">
        <img src={profilePic} alt="" />
      </div>
      <div className="comments__comments">
        <div className="commentedby">
          <h2>
            {/* {commentedBy} */}
            {firstname} {surname}
          </h2>
          <MoreHorizIcon />
        </div>
        <div className="comments__comments--text">
          <h3>{comment}</h3>
        </div>
      </div>
    </div>
  );
};

export default Comments;
