import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_USER } from "../../constants/friendRequestConstant";
import FindFriendCard from "../Cards/FindFriendCard";
import "./FindFriendMain.css";

const FindFriendMain = () => {
  const findFriend = useSelector((state) => state.findFriend);
  const dispatch = useDispatch();
  const { friends } = findFriend;
  const { myFriendRequest, peopleUserMayKnow } = friends ? friends : {};

  const removeUser = (friendId) => {
    dispatch({
      type: REMOVE_USER,
      payload: {
        friendId,
        peopleUserMayKnow,
      },
    });
  };

  return (
    <div className="findfriendmain">
      <div className="findfriendmain--request">
        <div className="findfriendmain--top">
          <h1>Friend Request</h1>
          <h2>See all</h2>
        </div>
        <div className="findfriendmain--cards">
          {myFriendRequest.map((friend, i) => {
            return <FindFriendCard top={true} key={i} friend={friend} />;
          })}
        </div>
      </div>
      <div className="findfriendmain--know">
        <div className="findfriendmain--top">
          <h1>People you may know</h1>
          <h2>See all</h2>
        </div>
        <div className="findfriendmain--cards">
          {peopleUserMayKnow.map((friend, i) => {
            return (
              <FindFriendCard
                removeUser={removeUser}
                top={false}
                key={i}
                friend={friend}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FindFriendMain;
