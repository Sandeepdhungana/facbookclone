import "./Friends.css";

import FriendList from "./FriendList";

const Friends = () => {
  const friends = [
    "Sandeep Dhungana",
    "Arpan Acharya",
    "Deepak Basnet",
    "Riddhi Dhungana",
    "Ranjeev Bohara",
    "Pujan Aryal",
    "Rajit Rimal",
    "Ashok Rimal",
    "Yash Sah",
  ];
  return (
    <div className="friends">
      <div className="friends__heading">
        <div className="friends__heading--mutual">
          <h1>Friends</h1>
          <h2>43 mutual friends</h2>
        </div>
        <h2>See All friends</h2>
      </div>
      <div className="friends__friends">
        {friends.map((name, i) => (
          <FriendList key={i} name={name} />
        ))}
      </div>
    </div>
  );
};

export default Friends;
