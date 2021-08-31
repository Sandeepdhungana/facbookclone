import React from "react";
import useUserFromStorage from "../../hooks/useUserFromStorage";
import VideocamRoundedIcon from "@material-ui/icons/VideocamRounded";
import PhoneRoundedIcon from "@material-ui/icons/PhoneRounded";
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";

const MessengerRightTop = () => {
  const userFromStorage = useUserFromStorage();
  return (
    <div className="messenger__right--top shadow">
      <div className="messenger__right--top-name">
        <img src={userFromStorage?.profilePic} alt="" />
        <div className="messenger__right--names">
          <h2>Sandeep Dhungana</h2>
          <p>Active 10m ago</p>
        </div>
      </div>
      <div className="messenger__right--top-icons">
        <div className="top-icons">
          <PhoneRoundedIcon/>
        </div>
        <div className="top-icons">
          <VideocamRoundedIcon/>
        </div>
        <div className="top-icons">
          <MoreHorizRoundedIcon/>
        </div>
      </div>
    </div>
  );
};

export default MessengerRightTop;
