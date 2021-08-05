import React from "react";
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

const SideBarLeft = () => {
  return (
    <section id="sidebarleft">
      <div className="sidebar__links">
        <li className="sidebar__links--link">
          <Link to="/profile">
            <img
              className="sidebarleft__profilepic imgs"
              src={profilePic}
              alt=""
            />
            <span>
              <strong>Sandeep Dhungana</strong>
            </span>
          </Link>
        </li>
        <li className="sidebar__links--link">
          <Link to="/covidinfo">
            <img src={cov19} alt="" />
            <span>
              <strong>COVID-19 Information Centre</strong>
            </span>
          </Link>
        </li>
        <li className="sidebar__links--link">
          <Link to="/friends">
            <img src={friends} alt="" />
            <span>
              <strong>Friends</strong>
            </span>
          </Link>
        </li>
        <li className="sidebar__links--link">
          <Link to="/groups">
            <img src={group} alt="" />
            <span>
              <strong>Groups</strong>
            </span>
          </Link>
        </li>
        <li className="sidebar__links--link">
          <Link to="/marketplace">
            <img src={marketplace} alt="" />
            <span>
              <strong>Marketplace</strong>
            </span>
          </Link>
        </li>
        <li className="sidebar__links--link">
          <Link to="/watch">
            <img src={watch} alt="" />
            <span>
              <strong>Watch</strong>
            </span>
          </Link>
        </li>
        <li className="sidebar__links--link">
          <Link to="/events">
            <img src={events} alt="" />
            <span>
              <strong>Events</strong>
            </span>
          </Link>
        </li>
        <li className="sidebar__links--link">
          <Link to="/memories">
            <img src={memories} alt="" />
            <span>
              <strong>Memories</strong>
            </span>
          </Link>
        </li>
        <li className="sidebar__links--link">
          <Link to="/saved">
            <img src={saved} alt="" />
            <span>
              <strong>Saved</strong>
            </span>
          </Link>
        </li>
        <li className="sidebar__links--link line">
          <Link to="/profile">
            <ArrowDropDownRoundedIcon />
            <span>
              <strong>See More</strong>
            </span>
          </Link>
        </li>
      </div>
    </section>
  );
};

export default SideBarLeft;
