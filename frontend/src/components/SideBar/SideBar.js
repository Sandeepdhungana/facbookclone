import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = ({ icons, name, linkto, children }) => {
  return (
    <li className="sidebar__links--link">
      <NavLink to={`/${linkto}`}>
        {icons && (
          <img className="sidebarleft__profilepic imgs" src={icons} alt="" />
        )}
        {children}
        <span>
          <strong>{name}</strong>
        </span>
      </NavLink>
    </li>
  );
};

export default SideBar;
