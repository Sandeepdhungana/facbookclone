import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { postAddCommentAction } from "../../actions/postAction";
import profilePic from "../../assets/img/profilepic.jpg";

const CardComment = ({ postId, handleCommentLength, commentLength, text }) => {
  const [comment, setComment] = useState("");
  const commentRef = useRef();
  const dispatch = useDispatch();

  const submitPostComment = (e) => {
    e.preventDefault();
    if (comment) {
      dispatch(postAddCommentAction(postId, comment));
    }
    setComment("");
  };

  const commentColor = comment ? { color: "#166ADA" } : { color: "#6E747C" };
  return (
    <div className="cardcomment">
      <div className="cardcomment__img">
        <img src={profilePic} alt="" />
      </div>
      <form onSubmit={submitPostComment}>
        <div className="cardcomment__comment">
          <input
            onChange={(e) => setComment(e.target.value)}
            ref={commentRef}
            value={comment}
            type="text"
            placeholder="Add a comment"
            focus="true"
          />
          {/* <textarea placeholder="add a comment"></textarea> */}
        </div>
        <button className="comment" style={commentColor}>
          Comment
        </button>
      </form>
    </div>
  );
};

export default CardComment;
