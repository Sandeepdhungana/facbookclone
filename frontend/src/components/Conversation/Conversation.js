import useUserFromStorage from "../../hooks/useUserFromStorage";
import "./Conversation.css";

const Conversation = () => {
  const userFromStorage = useUserFromStorage();
  return (
    <div className="conversation">
      <div className="conversation__left">
        <img src={userFromStorage?.profilePic} alt="" />
      </div>
      <div className="conversation__right">
        <h2>Sandeep Dhungana</h2>
        <p>Sushila: I Love You</p>
      </div>
    </div>
  );
};

export default Conversation;
