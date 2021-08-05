import React from "react";
import { Link } from "react-router-dom";
import profilePic from "../../assets/img/profilepic.jpg";
import OnlineIcon from "../OnlineIcon/OnlineIcon";
import "./SideBarOnline.css";

const SideBarOnline = ({ name }) => {
  return (
    <Link to="/users">
      <div className="sidebaronline">
        <OnlineIcon profilePic={profilePic}/>
        <h2>{name}</h2>
      </div>
    </Link>
  );
};

export default SideBarOnline;
