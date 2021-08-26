import "./Friends.css";

import FriendList from "./FriendList";
import { useSelector } from "react-redux";

const Friends = () => {
  const profileGet = useSelector((state) => state.profileGet);
  const { profile } = profileGet;

  const user = profile?.user;
  const friends = user?.friends;

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
        {friends.map((friend, i) => (
          <FriendList key={i} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default Friends;
