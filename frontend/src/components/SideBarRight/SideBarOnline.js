import React from "react";
import { Link } from "react-router-dom";
import profilePic from "../../assets/img/profilepic.jpg";
import "./SideBarOnline.css";

const SideBarOnline = ({ name }) => {
  return (
    <Link to="/users">
      <div className="sidebaronline">
        <img
          src={profilePic}
          style={{ height: "3.5rem", width: "3.5rem", borderRadius: "50%" }}
          alt="profile pic"
        />
        <h2>{name}</h2>
        <div className="greendot"></div>
      </div>
    </Link>
  );
};

export default SideBarOnline;
