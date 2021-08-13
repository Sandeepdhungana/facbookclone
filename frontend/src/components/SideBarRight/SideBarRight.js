import React from "react";
import "./SideBarRight.css";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import SideBarOnline from "./SideBarOnline";
import profilePic from "../../assets/img/profilepic.jpg";

const SideBarRight = () => {
  const name = [
    "Ahmad Alkhuder",
    "Sandeep Dhungana",
    "Sushila Subedi",
    "Niroj Aryal",
    "Prem Katwal",
    "Ranjeev Bohara",
    "Ranjeev Bohara",
    "Ranjeev Bohara",
    "Ranjeev Bohara",
    "Ranjeev Bohara",
    "Ranjeev Bohara",
    "Ranjeev Bohara",
    "Yash Kumar Shah",
    "Shova Nyaupane",
    "Kushal Dhunana",
    "Aayusha Dhungana",
    "Bishnu Thapa",
  ];
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
        {name.map((name, i) => {
          return (
            <SideBarOnline key={i} name={name} icons={profilePic} linkto={i} />
          );
        })}
      </div>
    </section>
  );
};

export default SideBarRight;
