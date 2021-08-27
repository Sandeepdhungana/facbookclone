import "./FindFriendCard.css";
import { Link } from "react-router-dom";
import CardButton from "../Button/CardButton";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_USER } from "../../constants/friendRequestConstant";

const FindFriendCard = ({ friend, top, removeUser = undefined }) => {
  const [confirmed, setConfirmed] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [sendRequest, setSendRequest] = useState(false);
  const [canceled, setCanceled] = useState(false);
  const [text, setText] = useState("12 Mutual Friend");

  const dispatch = useDispatch();

  const buttonTopRequest = {
    color: "#fff",
    background: "#1977F3",
  };
  const buttonDownRequest = {
    color: "#000",
    background: "#E4E6EB",
  };
  const buttonTopKnow = {
    color: "#1977F3",
    background: "#E6F2FF",
  };
  const buttonDownKnow = {
    color: "#000",
    background: "#E4E6EB",
  };
  const requestConfirmed = {
    background: "#E4E6EB",
    color: "#808A8F",
    marginTop: "4.4rem",
  };
  const cancelRequestStyle = {
    marginTop: "4.4rem",
  };

  const confirmRequest = () => {
    setConfirmed(true);
  };
  const deleteRequest = () => {
    setDeleted(true);
  };
  const sendFriendRequest = () => {
    setText("Request sent");
    setSendRequest(true);
  };
  const cancelRequest = () => {
    setCanceled(false);
    setText("Request cancelled");
    setSendRequest(false);
  };

  const remove = () => {
    removeUser(friend._id);
  };

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

          <p>{text}</p>
        </div>
      </Link>
      <div className="findfriendcard--bottom">
        {top ? (
          <>
            {!confirmed && !deleted ? (
              <>
                <CardButton
                  handleClick={confirmRequest}
                  styles={buttonTopRequest}
                  text={"Confirm"}
                />
                <CardButton
                  handleClick={deleteRequest}
                  styles={buttonDownRequest}
                  text={"Delete"}
                />
              </>
            ) : (
              <>
                {confirmed && (
                  <CardButton
                    styles={requestConfirmed}
                    text={"Request Confirmed"}
                  />
                )}
                {deleted && (
                  <CardButton
                    styles={requestConfirmed}
                    text={"Request Deleted"}
                  />
                )}
              </>
            )}
          </>
        ) : (
          <>
            {!sendRequest && !canceled ? (
              <>
                <CardButton
                  handleClick={sendFriendRequest}
                  styles={buttonTopKnow}
                  text={"Add Friend"}
                />
                <CardButton
                  handleClick={remove}
                  styles={buttonDownKnow}
                  text={"Remove"}
                />
              </>
            ) : (
              <>
                {sendRequest && (
                  <CardButton
                    styles={cancelRequestStyle}
                    handleClick={cancelRequest}
                    text={"Cancel"}
                  />
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default FindFriendCard;
