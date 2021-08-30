import React, { useEffect, useRef } from "react";
import "./LogOut.css";
import exclamation from "../../assets/img/exclamation.png";
import setting from "../../assets/img/setting.png";
import what from "../../assets/img/what.png";
import halfmoon from "../../assets/img/halfmoon.png";
import arrow from "../../assets/img/arrow.png";
import logout from "../../assets/img/logout.png";
import LogOutComp from "./LogOutComp";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const LogOut = ({
  userFromStorage,
  // handleWindowClick,
  // dropDownClicked,
  closeModal,
}) => {
  const history = useHistory();
  const logOutRef = useRef();
  const logoutHandle = () => {
    localStorage.removeItem("userDetails");
    history.push("/login");
  };

  useEffect(() => {
    window.onclick = (e) => {
      closeModal(logOutRef, e);
    };
  }, [closeModal]);

  // useEffect(() => {
  //   window.onclick = function (event) {
  //     if (
  //       dropDownClicked &&
  //       logOutRef.current &&
  //       !logOutRef.current.contains(event.target)
  //     ) {
  //       handleWindowClick();
  //     }
  //   };
  // }, [handleWindowClick, logOutRef, dropDownClicked]);
  const icons = [
    {
      image: exclamation,
      title: "Give feedback",
      paragraph: "Help us imporve the new Facebook",
    },
    {
      image: setting,
      title: "Setting & privacy",
      arrow,
    },
    {
      image: what,
      title: "Help and support",
      arrow,
    },
    {
      image: halfmoon,
      title: "Display & accessibility",
      arrow,
    },
    {
      image: logout,
      title: "Log Out",
      handleFunction: logoutHandle,
    },
  ];

  return (
    <div ref={logOutRef} className="logout shadow">
      <Link to={`/profile`}>
        <div className="logout__top">
          <img src={userFromStorage?.profilePic} alt="" />
          <div className="logout__top--name">
            <h2>
              {userFromStorage?.firstname} {userFromStorage?.surname}
            </h2>
            <p>See your profile</p>
          </div>
        </div>
      </Link>
      {/* Logout Middle */}
      {icons.map((icon, i) => {
        return (
          <LogOutComp
            key={i}
            image={icon.image}
            title={icon.title}
            paragraph={icon.paragraph}
            arrow={icon.arrow}
            handleFunction={icon.handleFunction}
          />
        );
      })}
      <div className="logout__bottom"></div>
    </div>
  );
};

export default LogOut;
