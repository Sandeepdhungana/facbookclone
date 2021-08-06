import React, { isValidElement } from "react";
import "./SideBarLeft.css";
import { Link } from "react-router-dom";

import profilePic from "../../assets/img/profilepic.jpg";
import cov19 from "../../assets/img/cov19.png";
import friends from "../../assets/img/friends.png";
import group from "../../assets/img/group.png";
import marketplace from "../../assets/img/marketplace.png";
import watch from "../../assets/img/watch.png";
import events from "../../assets/img/events.png";
import memories from "../../assets/img/memories.png";
import saved from "../../assets/img/saved.png";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import SideBar from "../SideBar/SideBar";

const SideBarLeft = () => {
  // function isClassComponent(component) {
  //   return (
  //     typeof component === "function" && !!component.prototype.isReactComponent
  //   );
  // }

  // function isFunctionComponent(component) {
  //   return (
  //     typeof component === "function" &&
  //     String(component).includes("return React.createElement")
  //   );
  // }

  // function isReactComponent(component) {
  //   return isClassComponent(component) || isFunctionComponent(component);
  // }
  const icons = [
    profilePic,
    profilePic,
    profilePic,
    profilePic,
    profilePic,
    profilePic,
    profilePic,
    profilePic,
    profilePic,
    cov19,
    friends,
    group,
    marketplace,
    watch,
    events,
    memories,
    saved,
  ];
  const name = [
    "Sandeep Dhungana",
    "Sandeep Dhungana",
    "Sandeep Dhungana",
    "Sandeep Dhungana",
    "Sandeep Dhungana",
    "Sandeep Dhungana",
    "Sandeep Dhungana",
    "Sandeep Dhungana",
    "Sandeep Dhungana",
    "COVID-19 Information Centre",
    "Friends",
    "Group",
    "Marketplace",
    "Watch",
    "Events",
    "Memories",
    "Saved",
  ];
  const linkto = [
    "profile",
    "profile",
    "profile",
    "profile",
    "profile",
    "profile",
    "profile",
    "profile",
    "profile",
    "cov19",
    "friends",
    "groups",
    "marketplace",
    "watch",
    "events",
    "memories",
    "saved",
  ];
  const iconsName = icons.map((icons, i) => {
    return [icons, name[i], linkto[i]];
  });
  return (
    <section id="sidebarleft">
      <div className="sidebar__links">
        {iconsName.map((icon, i) => {
          return (
            <SideBar
              key={i}
              icons={icon[0]}
              name={icon[1]}
              linkto={icon[2]}
            />
          );
        })}
      </div>
      <li className="sidebar__links--link line">
        <Link to="/seemore">
          <ArrowDropDownRoundedIcon />
          <span>
            <strong>See More</strong>
          </span>
        </Link>
      </li>
    </section>
  );
};

export default SideBarLeft;
