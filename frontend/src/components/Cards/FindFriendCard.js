import "./FindFriendCard.css";
import { Link } from "react-router-dom";
import CardButton from "../Button/CardButton";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  cancelFriendRequestAction,
  confirmFrienRequestAction,
  deleteFriendRequestAction,
  sendFriendRequestAction,
} from "../../actions/friendRequestAction";

const FindFriendCard = ({ friend, top, removeUser = undefined }) => {
  const [confirmed, setConfirmed] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [sendRequest, setSendRequest] = useState(false);
  const [canceled, setCanceled] = useState(false);
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  console.log();
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
    dispatch(confirmFrienRequestAction(friend._id));
    setConfirmed(true);
  };
  const deleteRequest = () => {
    setDeleted(true);
    deleteFriendRequestAction(friend._id);
  };
  const sendFriendRequest = () => {
    setText("Request sent");
    dispatch(sendFriendRequestAction(friend._id));
    setSendRequest(true);
  };
  const cancelRequest = () => {
    setCanceled(false);

    setText("Request cancelled");
    dispatch(cancelFriendRequestAction(friend._id));
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

          {!top && friend.mutualFriend?.length !== 0 && (
            <p>{`${friend.mutualFriend?.length} mutual friends`}</p>
          )}
          {text && <p>{text}</p>}
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
