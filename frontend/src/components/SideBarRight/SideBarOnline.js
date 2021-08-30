import React from "react";
import { Link } from "react-router-dom";
import OnlineIcon from "../OnlineIcon/OnlineIcon";
import "./SideBarOnline.css";

const SideBarOnline = ({
  friends: { _id, firstname, surname, profilePic },
}) => {
  return (
    <Link to={`/profile/${_id}`}>
      <div className="sidebaronline">
        <OnlineIcon profilePic={profilePic} />
        <h2>
          {firstname} {surname}
        </h2>
      </div>
    </Link>
  );
};

export default SideBarOnline;
