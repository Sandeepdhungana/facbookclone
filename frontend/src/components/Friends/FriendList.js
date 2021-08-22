import profilePic from "../../assets/img/profilepic.jpg";

const FriendList = ({ name }) => {
  return (
    <div className="friends__friends--list">
      <img src={profilePic} alt="" />
      <h2>{name}</h2>
    </div>
  );
};

export default FriendList;
