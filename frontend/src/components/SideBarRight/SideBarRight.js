import React from "react";
import "./SideBarRight.css";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import SideBarOnline from "./SideBarOnline";
import { Link } from "react-router-dom";

const SideBarRight = ({ onlineFriends }) => {
  return (
    <section id="sidebarright">
      <div className="sidebarright__container">
        <div className="sidebarright__contacts--heading">
          <h1>Contacts</h1>
          <div className="sidebarright__contacts--icons">
            <VideoCallIcon />
            <SearchIcon />
            <MoreHorizIcon />
          </div>
        </div>
        {onlineFriends?.map((friends, i) => {
          return <SideBarOnline key={i} friends={friends} />;
        })}
        {onlineFriends?.length === 0 && (
          <div className="nofriend">
            <h1>No Online Friends</h1>
            <Link to="/friends">
              <h2>Add Friends Now</h2>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default SideBarRight;
