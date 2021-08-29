import React, { useEffect, useState } from "react";
import "./LoginScreen.css";
import facebook from "../../assets/svgs/Facebook.svg";
import { Link } from "react-router-dom";
import SignupScreen from "../SignupScreen/SignupScreen";
import Input from "../../components/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../../actions/userAction";
import PageLoader from "../../components/Loader/PageLoader";
import { Helmet } from "react-helmet";

const LoginScreen = ({ history, location }) => {
  const [clickedCreateButton, setClikcedCreateButton] = useState(false);
  const [emailandpassword, setEmailAndPassowrd] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const loginuserinfo = useSelector((state) => state.loginUser);
  const { loading, userDetails, error } = loginuserinfo;
  console.log(error);

  const handleNameAndPassword = (e) => {
    const value = e.target.value;
    setEmailAndPassowrd({
      ...emailandpassword,
      [e.target.name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUserAction(emailandpassword));
    history.push("/home");
  };

  useEffect(() => {
    if (userDetails) {
      console.log("it is not running");
      history.push("/home");
    }
  }, [history, userDetails]);
  return (
    <>
      <Helmet>
        <title>Facebook - log in or sign up</title>
      </Helmet>
      <section id="loginscreen">
        {loading ? (
          <PageLoader />
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
                  <form onSubmit={handleLogin}>
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
                    {error && <p className="error">{error}</p>}
                    <button
                      className="loginscreen__left--login-btn"
                      type="submit"
                    >
                      Log In
                    </button>
                  </form>
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
    </>
  );
};

export default LoginScreen;

// <h3>
// <strong>Create a Page </strong>for a celebrity, band or business
// </h3>
