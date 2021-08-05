import React, { useState } from "react";
import "./LoginScreen.css";
import facebook from "../../assets/svgs/Facebook.svg";
import { Link } from "react-router-dom";
import SignupScreen from "../SignupScreen/SignupScreen";

const LoginScreen = () => {
  const [clickedCreateButton, setClikcedCreateButton] = useState(false);

  return (
    <section id="loginscreen">
      <div className="loginscreen--content">
        <div className="loginscreen__right">
          <div className="loginscreen__right--facebook">
            <img src={facebook} alt="" />
            <h1>
              Facebook helps you connect and share
              <br /> with the people in your life.
            </h1>
          </div>
        </div>
        <div className="loginscreen__left shadow">
          <div className="loginscreen__left--login">
            <input type="text" placeholder="Email address or phone number" />
            <input type="password" placeholder="Password" />
            <button className="loginscreen__left--login-btn" type="submit">
              Log In
            </button>
            <Link to="/forgotpassword">Forgotten password?</Link>
            <button
              onClick={() => {
                setClikcedCreateButton(true);
              }}
              className="loginscreen__left--createaccount-btn"
            >
              Create New Account
            </button>
          </div>
        </div>
      </div>
      {clickedCreateButton && (
        <SignupScreen
          showCreateModal={() => setClikcedCreateButton(false)}
          clickedCreateButton={clickedCreateButton}
        />
      )}
    </section>
  );
};

export default LoginScreen;

// <h3>
// <strong>Create a Page </strong>for a celebrity, band or business
// </h3>
