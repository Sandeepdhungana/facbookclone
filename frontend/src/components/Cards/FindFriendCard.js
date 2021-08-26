import "./FindFriendCard.css";
import { Link } from "react-router-dom";
const FindFriendCard = ({ buttonTop, buttonDown, friend }) => {
  return (
    <div className="findfriendcard shadow">
      <Link to={`/profile/${friend._id}`}>
        <div className="findfriendcard--top">
          <img src={friend.profilePic} alt="" />
        </div>
        <div className="findfrinedcard--middle">
          <h2>
            {friend.firstname} {friend.surname}
          </h2>

          <p>12 mutual friends</p>
        </div>
      </Link>
      <div className="findfriendcard--bottom">
        <button
          style={{ background: buttonTop.background, color: buttonTop.color }}
        >
          {buttonTop.text}
        </button>
        <button
          style={{ background: buttonDown.background, color: buttonDown.color }}
        >
          {buttonDown.text}
        </button>
      </div>
    </div>
  );
};

export default FindFriendCard;
