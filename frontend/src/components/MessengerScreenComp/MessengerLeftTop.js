import React from "react";
import useUserFromStorage from "../../hooks/useUserFromStorage";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";

const MessengerLeftTop = () => {
  const userFromStorage = useUserFromStorage();
  const lineIcon = (
    <svg viewBox="0 0 36 36" height="28" width="28">
      <path d="M12.5 18A2.25 2.25 0 118 18a2.25 2.25 0 014.5 0zm7.75 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm5.5 2.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"></path>
    </svg>
  );

  const writeIcon = (
    <svg viewBox="0 0 36 36" height="28" width="28">
      <path d="M17.305 16.57a1.998 1.998 0 00-.347.467l-1.546 2.87a.5.5 0 00.678.677l2.87-1.545c.171-.093.328-.21.466-.347l8.631-8.631a1.5 1.5 0 10-2.121-2.122l-8.631 8.632z"></path>
      <path d="M18 10.5a1 1 0 001-1V9a1 1 0 00-1-1h-6a4 4 0 00-4 4v12a4 4 0 004 4h12a4 4 0 004-4v-6a1 1 0 00-1-1h-.5a1 1 0 00-1 1v6a1.5 1.5 0 01-1.5 1.5H12a1.5 1.5 0 01-1.5-1.5V12a1.5 1.5 0 011.5-1.5h6z"></path>
    </svg>
  );
  return (
    <div className="messenger__left--top">
      <div className="messenger__left--top-top">
        <div className="messenger__left--top-head">
          <img src={userFromStorage?.profilePic} alt="" />
          <h1>Chats</h1>
        </div>
        <div className="messenger__left--top-icons">
          <div className="icons">
            <i class="fas fa-ellipsis-h"></i>
          </div>
          <div className="icons">
            <VideoCallIcon />
            {/* <i class="far fa-video-plus"></i> */}
          </div>
          <div className="icons">
            <i class="far fa-edit"></i>
          </div>
        </div>
      </div>
      <div className="messenger__left--top-bottom">
        <div className="messenger__left--top-input">
          <SearchIcon />
          <input type="text" placeholder="Search Messenger" />
        </div>
      </div>
    </div>
  );
};

export default MessengerLeftTop;
