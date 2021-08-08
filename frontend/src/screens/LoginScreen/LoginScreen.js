import React, { useEffect, useState } from "react";
import "./LoginScreen.css";
import facebook from "../../assets/svgs/Facebook.svg";
import { Link } from "react-router-dom";
import SignupScreen from "../SignupScreen/SignupScreen";
import Input from "../../components/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../actions/userAction";

const LoginScreen = ({ history, location }) => {
  const [clickedCreateButton, setClikcedCreateButton] = useState(false);
  const [emailandpassword, setEmailAndPassowrd] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const loginuserinfo = useSelector((state) => state.loginUser);
  const { loading } = loginuserinfo;

  const handleNameAndPassword = (e) => {
    const value = e.target.value;
    setEmailAndPassowrd({
      ...emailandpassword,
      [e.target.name]: value,
    });
  };

  const handleLogin = (e) => {
    dispatch(loginUser(emailandpassword));
    history.push("/home");
  };

  // const redirect = !loginuserinfo.userDetails ? "/login" : "/home";

  // useEffect(() => {
  //   history.push(redirect);
  // }, [dispatch, loginuserinfo, history, redirect]);
  return (
    <section id="loginscreen">
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
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
                <Input
                  name="email"
                  type="text"
                  placeholder="Email address or phone number"
                  width="100%"
                  handleNameAndPassword={handleNameAndPassword}
                />
                <Input
                  name="password"
                  type="password"
                  placeholder="Password"
                  width="100%"
                  handleNameAndPassword={handleNameAndPassword}
                />
                <button
                  onClick={handleLogin}
                  className="loginscreen__left--login-btn"
                  type="submit"
                >
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
        </>
      )}
    </section>
  );
};

export default LoginScreen;

// <h3>
// <strong>Create a Page </strong>for a celebrity, band or business
// </h3>
