import React from "react";
// import HomeScreen from "./screens/HomeScreen";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import SignupScreen from "./screens/SignupScreen/SignupScreen";

const App = () => {
  return (
    <Router>
      <Switch>
        {/* Pages not containing navbar */}
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/signup" component={SignupScreen} />
        <>
          {/* Pages Containing Navbar */}
          <NavBar />
          <PrivateRoute exact path="/">
            <Redirect to="/home" />
          </PrivateRoute>
          <PrivateRoute exact path="/home" component={HomeScreen} />
        </>
      </Switch>
    </Router>
  );
};

export default App;
