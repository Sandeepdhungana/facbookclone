import React, { useEffect, useRef } from "react";
import profilePic from "../../assets/img/profilepic.jpg";

const CardComment = () => {
  const commentRef = useRef();

  useEffect(() => {
    commentRef.current.focus();
  });
  return (
    <div className="cardcomment">
      <div className="cardcomment__img">
        <img src={profilePic} alt="" />
      </div>
      <div className="cardcomment__comment">
        <input
          ref={commentRef}
          type="text"
          placeholder="Add a comment"
          focus="true"
        />
      </div>
    </div>
  );
};

export default CardComment;
