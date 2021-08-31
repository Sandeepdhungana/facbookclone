import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import LogOut from "./components/LogOut/LogOut";
import NavBar from "./components/NavBar/NavBar";
import useUserFromStorage from "./hooks/useUserFromStorage";
import FindFriendScreen from "./screens/FindFriendScreen/FindFriendScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import socket from "./socket";
import { useDispatch, useSelector } from "react-redux";
import { useOnlineFriends } from "./hooks/useOnlineFriends";
import { myFriendGetAction } from "./actions/findFriendAction";
import { ONLINE_USER_ADDED } from "./constants/userConstant";
import PostScreen from "./screens/PostScreen/PostScreen";

const App = () => {
  const userFromStorage = useUserFromStorage();
  const myFriend = useSelector((state) => state.myFriend);
  const onlineUser = useSelector((state) => state.onlineUser);
  const { onlineUsers } = onlineUser;
  const { myfriends } = myFriend;
  const dispatch = useDispatch();

  useEffect(() => {
    socket.emit("ADD_USER", userFromStorage?._id);
    socket.on("ONLINE_USERS", (users) => {
      dispatch({
        type: ONLINE_USER_ADDED,
        payload: users,
      });
    });

    return () => {
      socket.off("USER_ADDED");
      socket.off("ONLINE_USERS");
    };
  }, [dispatch, userFromStorage?._id]);
  const onlineFriends = useOnlineFriends(onlineUsers, myfriends);
  // console.log("online friends are:", onlineFriends);

  useEffect(() => {
    dispatch(myFriendGetAction());
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
          <Route exact path="/:name/post/:postId" component={PostScreen} />
          <Route exact path="/profile/:id" component={ProfileScreen} />
        </>
      </Switch>
    </Router>
  );
};

export default App;
