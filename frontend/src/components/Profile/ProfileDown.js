import React from "react";
import WritePost from "../WritePost/WritePost";
import "./ProfileDown.css";

const ProfileDown = () => {
  return (
    <div className="profiledown">
      <div className="profiledown__content">
        <div className="profiedown__content--left"></div>
        <div className="profiledown__content--right">
          <WritePost />
        </div>
      </div>
    </div>
  );
};

export default ProfileDown;
