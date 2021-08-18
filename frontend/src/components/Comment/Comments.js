import React from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "./Comments.css";
const Comments = ({
  comments: {
    comment,
    commentedBy: { firstname, surname, profilePic },
  },
  postId,
}) => {
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
