import React from "react";
import { Link } from "react-router-dom";
import OnlineIcon from "../OnlineIcon/OnlineIcon";
import "./SideBarOnline.css";

const SideBarOnline = ({ name, linkto }) => {
  return (
    <Link to={`/users/${linkto}`}>
      <div className="sidebaronline">
        <OnlineIcon profilePic="//unsplash.it/400" />
        <h2>{name}</h2>
      </div>
    </Link>
  );
};

export default SideBarOnline;
