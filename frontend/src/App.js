import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import LogOut from "./components/LogOut/LogOut";
import NavBar from "./components/NavBar/NavBar";
import { useOnlineFriends } from "./hooks/useOnlineFriends";
import useUserFromStorage from "./hooks/useUserFromStorage";
import FindFriendScreen from "./screens/FindFriendScreen/FindFriendScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import socket from "./socket";
import { useDispatch, useSelector } from "react-redux";
import { findFriendAction } from "./actions/findFriendAction";

const App = () => {
  const userFromStorage = useUserFromStorage();
  const [onlineUsers, setOnlineUsers] = useState([]);
  const findFriend = useSelector((state) => state.findFriend);
  const { friends } = findFriend;
  const { peopleUserMayKnow } = friends ? friends : {};
  const dispatch = useDispatch();

  const onlineFriends = useOnlineFriends(onlineUsers, peopleUserMayKnow);

  useEffect(() => {
    socket.emit("ADD_USER", userFromStorage?._id);
    socket.on("ONLINE_USERS", (users) => {
      setOnlineUsers(users);
    });

    return () => {
      socket.off("USER_ADDED");
      socket.off("ONLINE_USERS");
    };
  }, [userFromStorage?._id]);

  useEffect(() => {
    dispatch(findFriendAction());
  }, [dispatch]);
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
          <Route exact path="/home">
            <HomeScreen onlineFriends={onlineFriends} />
          </Route>
          <Route exact path="/logout" component={LogOut} />
          <Route exact path="/friends" component={FindFriendScreen} />
          <Route exact path="/profile/:id" component={ProfileScreen} />
        </>
      </Switch>
    </Router>
  );
};

export default App;
