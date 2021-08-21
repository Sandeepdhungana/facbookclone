import React from "react";
import Button from "../Button/Button";
import "./ProfileMenu.css";

const ProfileMenu = () => {
  return (
    <div className="profilemenu shadow">
      <div className="profilemenu__name">
        <h1>Sandeep Dhungana</h1>
      </div>
      <div className="profilemenu__menu">
        <ul>
          <li>Posts</li>
          <li>About</li>
          <li>Friends</li>
          <li>Photos</li>
          <li>videos</li>
          <li>Chekc-ins</li>
          <li>More</li>
        </ul>
        <div className="profilemenu__button">
          <Button />
          <Button />
          <Button />
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;
