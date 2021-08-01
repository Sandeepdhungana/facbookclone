import React from "react";
import "./SideBarRight.css";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import SideBarOnline from "./SideBarOnline";

const SideBarRight = () => {
  const name = [
    "Sandeep Dhungana",
    "Sushila Subedi",
    "Niroj Aryal",
    "Prem Katwal",
    "Ranjeev Bohara",
    "Yash Kumar Shah",
    "Shova Nyaupane",
    "Kushal Dhunana",
    "Aayusha Dhungana",
    "Bishnu Thapa",
  ];
  return (
    <section id="sidebarright">
      <div className="sidebarright__contacts--heading">
        <h1>Contacts</h1>
        <div className="sidebarright__contacts--icons">
          <VideoCallIcon />
          <SearchIcon />
          <MoreHorizIcon />
        </div>
      </div>
      {name.map((name, i) => {
        return <SideBarOnline name={name} />;
      })}
    </section>
  );
};

export default SideBarRight;
