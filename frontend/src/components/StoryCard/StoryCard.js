import React, { useState } from "react";
import "./StoryCard.css";
import profilePic from "../../assets/img/profilepic.jpg";

const StoryCard = ({ name }) => {
  let firstName = useState("");
  let lastName = useState("");
  firstName = name.split(" ")[0];
  lastName = name.split(" ")[1];
  return (
    <div className="storycard">
      <div className="storycard--profilepic">
        <img src={profilePic} alt="" />
      </div>
      <div className="storycard--story">
        <img src={profilePic} alt="" />
      </div>
      <div className="storycard--name">
        <h2>{firstName}</h2>
        <h2>{lastName}</h2>
      </div>
    </div>
  );
};

export default StoryCard;
