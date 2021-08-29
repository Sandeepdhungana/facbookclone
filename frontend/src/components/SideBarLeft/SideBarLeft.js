import React from "react";
import "./SideBarLeft.css";
import { Link } from "react-router-dom";

import cov19 from "../../assets/img/cov19.png";
import friends from "../../assets/img/friends.png";
import group from "../../assets/img/group.png";
import jobs from "../../assets/img/jobs.png";
import page from "../../assets/img/page.png";
import marketplace from "../../assets/img/marketplace.png";
import watch from "../../assets/img/watch.png";
import events from "../../assets/img/events.png";
import memories from "../../assets/img/memories.png";
import saved from "../../assets/img/saved.png";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import SideBar from "../SideBar/SideBar";
import useUserFromStorage from "../../hooks/useUserFromStorage";

const SideBarLeft = ({ profilePic }) => {
  const userFromStorage = useUserFromStorage();
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
    cov19,
    friends,
    group,
    marketplace,
    watch,
    events,
    memories,
    saved,
    page,
    jobs,
  ];
  const name = [
    "Sandeep Dhungana",
    "COVID-19 Information Centre",
    "Friends",
    "Group",
    "Marketplace",
    "Watch",
    "Events",
    "Memories",
    "Saved",
    "Pages",
    "Jobs",
  ];
  const linkto = [
    `profile/${userFromStorage?._id}`,
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
            <SideBar key={i} icons={icon[0]} name={icon[1]} linkto={icon[2]} />
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
