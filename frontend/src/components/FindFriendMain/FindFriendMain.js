import { useSelector } from "react-redux";
import FindFriendCard from "../Cards/FindFriendCard";
import "./FindFriendMain.css";

const FindFriendMain = () => {
  const findFriend = useSelector((state) => state.findFriend);
  const { friends } = findFriend;
  const { myFriendRequest, peopleUserMayKnow } = friends ? friends : {};

  const buttonTopRequest = {
    text: "Confirm",
    color: "#fff",
    background: "#1977F3",
  };

  const buttonDownRequest = {
    text: "Delete",
    color: "#000",
    background: "#E4E6EB",
  };
  const buttonTopKnow = {
    text: "Add Friend",
    color: "#1977F3",
    background: "#E6F2FF",
  };

  const buttonDownKnow = {
    text: "Remove",
    color: "#000",
    background: "#E4E6EB",
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
            return (
              <FindFriendCard
                key={i}
                friend={friend}
                buttonTop={buttonTopRequest}
                buttonDown={buttonDownRequest}
              />
            );
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
                key={i}
                friend={friend}
                buttonTop={buttonTopKnow}
                buttonDown={buttonDownKnow}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FindFriendMain;
