import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBarIcons.css";

const NavBarIcons = ({ pageName, children }) => {
  return (
    <li>
      <NavLink to={`/${pageName}`} activeClassName="activenow">
        {/* <img src={homeIcon} alt="Home" /> */}
        {/* {<Svg />} */}
        {children}
      </NavLink>
    </li>
  );
};

export default NavBarIcons;
