import React from "react";
// import HomeScreen from "./screens/HomeScreen";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { LoginRoute } from "./components/PrivateRoute/LoginRoute";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";

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
        </>
      </Switch>
    </Router>
  );
};

export default App;
