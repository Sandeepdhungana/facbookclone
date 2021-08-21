import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import LogOut from "./components/LogOut/LogOut";
import NavBar from "./components/NavBar/NavBar";
import TestScreen from "./components/TestScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";

const App = () => {
  return (
    <Router>
      <Switch>
        {/* Pages not containing navbar */}
        <Route exact path="/login" component={LoginScreen} />
        <>
          {/* Pages Containing Navbar */}
          <NavBar />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home" component={HomeScreen} />
          <Route exact path="/logout" component={LogOut} />
          <Route exact path="/profile/:id" component={ProfileScreen} />
          <Route exact path="/profile/" component={TestScreen} />
        </>
      </Switch>
    </Router>
  );
};

export default App;
