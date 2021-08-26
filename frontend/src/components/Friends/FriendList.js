import { Link } from "react-router-dom";

const FriendList = ({ friend: { _id, firstname, surname, profilePic } }) => {
  return (
    <Link to={`/profile/${_id}`}>
      <div className="friends__friends--list">
        <img src={profilePic} alt="" />
        <h2>
          {firstname} {surname}
        </h2>
      </div>
    </Link>
  );
};

export default FriendList;
