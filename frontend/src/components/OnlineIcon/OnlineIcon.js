import React from "react";
import './OnlineIcon.css';

const OnlineIcon = ({profilePic}) => {
  return (
    <div className="onlineicon">
      <img
        src={profilePic}
        style={{ height: "3.5rem", width: "3.5rem", borderRadius: "50%" }}
        alt="profile pic"
      />
      <div className="greendot"></div>
    </div>
  );
};

export default OnlineIcon;
