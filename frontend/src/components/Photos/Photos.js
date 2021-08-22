import "./Photos.css";
import profilePic from "../../assets/img/profilepic.jpg";

const Photos = () => {
  return (
    <div className="photos">
      <div className="photos__heading">
        <h1>Photos</h1>
        <h2>See All Photos</h2>
      </div>
      <div className="photos__heading--photos">
        <img src={profilePic} alt="" />
        <img src={profilePic} alt="" />
        <img src={profilePic} alt="" />
        <img src={profilePic} alt="" />
        <img src={profilePic} alt="" />
        <img src={profilePic} alt="" />
        <img src={profilePic} alt="" />
        <img src={profilePic} alt="" />
        <img src={profilePic} alt="" />
      </div>
    </div>
  );
};

export default Photos;
