import React, { useEffect, useState } from "react";
import "./SignupScreen.css";
import CloseIcon from "@material-ui/icons/Close";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import HelpIcon from "@material-ui/icons/Help";
import { useDispatch, useSelector } from "react-redux";
import { registerUserAction } from "../../actions/userAction";
import ButtonLoader from "../../components/Loader/ButtonLoader";
import { useHistory } from "react-router-dom";
import validator from "validator";

const SignupScreen = ({ showCreateModal, clickedCreateButton }) => {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [nameandpassword, setNameAndPassowrd] = useState({
    firstname: "",
    surname: "",
    email: "",
    password: "",
  });

  const [dateofbirth, setDateOfBirth] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [gender, setGender] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);
  const history = useHistory();
  const registeruser = useSelector((state) => state.registerUser);
  const { userDetails } = registeruser;

  const dispatch = useDispatch();

  // Year Generator
  const getYearDropList = () => {
    const year = new Date().getFullYear();
    return Array.from(new Array(117), (v, i) => (
      <option key={i} value={year - i}>
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
  const handleNameAndPassword = (e) => {
    const value = e.target.value;
    setNameAndPassowrd({
      ...nameandpassword,
      [e.target.name]: value,
    });
  };
  const handleDateDateOfBirth = (e) => {
    const value = e.target.value;
    setDateOfBirth({
      ...dateofbirth,
      [e.target.name]: value,
    });
  };
  // console.log([nameandpassword, dateofbirth, gender]);
  let isValidEmail = validator.isEmail(nameandpassword.email);
  let isValidPassword = validator.isStrongPassword(nameandpassword.password, {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidPassword && !isValidEmail) {
      setPasswordError(
        "Password must be at least 8 characters and include numbers, letters and symbols"
      );
      setEmailError("Enter a valid email to register");
    } else if (!isValidPassword) {
      setPasswordError(
        "Password must be at least 8 characters and include numbers, letters and symbols"
      );
    } else if (!isValidEmail) {
      setEmailError("Enter a valid email to register");
    } else if (!isValidEmail && isValidPassword) {
      setEmailError("Enter a valid email to register");
      setPasswordError("");
    } else if (!isValidPassword && isValidEmail) {
      setPasswordError(
        "Password must be at least 8 characters and include numbers, letters and symbols"
      );
      setEmailError("");
    }

    if (isValidEmail && isValidPassword) {
      dispatch(
        registerUserAction(
          nameandpassword,
          dateofbirth,
          gender,
          showCreateModal
        )
      );
      setButtonLoading(true);
    }
  };

  useEffect(() => {
    if (userDetails) {
      history.push("/home");
    }
  });

  return (
    <div className="overlay">
      <form
        onSubmit={handleSubmit}
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
            <input
              value={nameandpassword.firstname}
              onChange={handleNameAndPassword}
              name="firstname"
              required
              type="text"
              placeholder="First name"
            />
            <input
              value={nameandpassword.surname}
              onChange={handleNameAndPassword}
              name="surname"
              required
              type="text"
              placeholder="Surname"
            />
          </div>
          <div className="signupscreen__form--email">
            <input
              value={nameandpassword.email}
              onChange={handleNameAndPassword}
              name="email"
              required
              type="text"
              placeholder="Mobile number or email address"
            />
            {emailError && <p className="error">{emailError}</p>}
          </div>
          <div className="signupscreen__form--password">
            <input
              value={nameandpassword.password}
              onChange={handleNameAndPassword}
              name="password"
              required
              type="password"
              placeholder="New password"
            />
            {passwordError && <p className="error">{passwordError}</p>}
          </div>
          <div className="signupscreen__form--datedropdown">
            <div className="labels">
              Date of birth
              <HelpIcon />
            </div>
            <div className="signupscreen__form--down">
              <select
                onChange={handleDateDateOfBirth}
                value={dateofbirth.day}
                name="day"
                id="day"
              >
                {getDayDropList()}
              </select>
            </div>
            <div className="signupscreen__form--down">
              <select
                onChange={handleDateDateOfBirth}
                value={dateofbirth.month}
                name="month"
                id="month"
              >
                {getMonthDropList()}
              </select>
            </div>
            <div className="signupscreen__form--down">
              <select
                onChange={handleDateDateOfBirth}
                value={dateofbirth.year}
                name="year"
                id="year"
              >
                {getYearDropList()}
              </select>
            </div>
          </div>
          <div className="signupscreen__form--radiobtn">
            <div className="labels">
              Gender
              <HelpIcon />
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
              {gender === "female" && <RadioButtonCheckedIcon />}
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
              {gender === "male" && <RadioButtonCheckedIcon />}
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
              {gender === "custom" && <RadioButtonCheckedIcon />}
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
          <button>{buttonLoading ? <ButtonLoader /> : "Sign Up"}</button>
        </div>
      </form>
    </div>
  );
};

export default SignupScreen;
