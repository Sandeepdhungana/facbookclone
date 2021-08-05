import React, { useState } from "react";
import "./SignupScreen.css";
import CloseIcon from "@material-ui/icons/Close";

const SignupScreen = ({ showCreateModal, clickedCreateButton }) => {
  const [gender, setGender] = useState("");
  // Year Generator
  const getYearDropList = () => {
    const year = new Date().getFullYear();
    return Array.from(new Array(117), (v, i) => (
      <option key={i} value={year + i}>
        {year - i}
      </option>
    ));
  };
  //   Day Generator
  const getDayDropList = () => {
    return Array.from(new Array(31), (v, i) => (
      <option key={i} value={i + 1}>
        {i + 1}
      </option>
    ));
  };
  //   Month Generator
  const getMonthDropList = () => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return Array.from(months, (v, i) => (
      <option key={i} value={v}>
        {v}
      </option>
    ));
  };
  const handleRadioButton = (e) => {
    setGender(e.target.value);
  };

  return (
    <div className="overlay">
      <div
        className={
          !clickedCreateButton
            ? "signupscreen radius shadow hideModal"
            : "signupscreen radius shadow showModal"
        }
      >
        <div className="signupscreen__top">
          <div className="signupscreen__top--signup">
            <h1>Sign Up</h1>
            <h2>It's quick and easy.</h2>
          </div>
          <div className="signupscreen__top--cancel">
            <CloseIcon onClick={showCreateModal} />
          </div>
        </div>
        <div className="signupscreen__form">
          <div className="signupscreen__form--name">
            <input required type="text" placeholder="First name" />
            <input required type="text" placeholder="Surname" />
          </div>
          <div className="signupscreen__form--email">
            <input
              required
              type="text"
              placeholder="Mobile number or email address"
            />
          </div>
          <div className="signupscreen__form--password">
            <input required type="password" placeholder="New password" />
          </div>
          <div className="signupscreen__form--datedropdown">
            <div className="labels">
              Date of birth
              <i class="fa-solid fa-circle-question"></i>
            </div>
            <div className="signupscreen__form--down">
              <select name="day" id="day">
                {getDayDropList()}
              </select>
            </div>
            <div className="signupscreen__form--down">
              <select name="day" id="day">
                {getMonthDropList()}
              </select>
            </div>
            <div className="signupscreen__form--down">
              <select name="day" id="day">
                {getYearDropList()}
              </select>
            </div>
          </div>
          <div className="signupscreen__form--radiobtn">
            <div className="labels">
              Gender
              <span>
                <i class="fa-solid fa-circle-question"></i>
              </span>
            </div>
            <div className="signupscreen__form--radiobtn--female">
              <p htmlFor="female">Female</p>
              <input
                required
                onChange={handleRadioButton}
                type="radio"
                value="female"
                name="gender"
              />
            </div>
            <div className="signupscreen__form--radiobtn--male">
              <p htmlFor="male">Male</p>
              <input
                required
                onChange={handleRadioButton}
                type="radio"
                value="male"
                name="gender"
              />
            </div>
            <div className="signupscreen__form--radiobtn--custom">
              <p htmlFor="custom">Custom</p>
              <input
                required
                onChange={handleRadioButton}
                type="radio"
                value="custom"
                name="gender"
              />
            </div>
          </div>
        </div>
        <div className="signupscreen__form--text">
          <p>
            By clicking Sign Up, you agree to our Terms, Data Policy and Cookie
            Policy. You may receive SMS notifications from us and can opt out at
            any time.
          </p>
        </div>
        <div className="signupscreen__btn">
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default SignupScreen;
