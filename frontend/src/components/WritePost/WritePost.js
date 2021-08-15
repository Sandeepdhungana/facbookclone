import React, { useState } from "react";
import profilePic from "../../assets/img/profilepic.jpg";
import "./WritePost.css";

import liveIcon from "./icons/liveIcon.png";
import photoIcon from "./icons/photoIcon.png";
import smileIcon from "./icons/smileIcon.png";
import WritePostModal from "./WritePostModal";
import useUserFromStorage from "../../hooks/useUserFromStorage";

const WritePost = () => {
  const [clicked, setClicked] = useState(false);
  if (clicked) {
    document.body.classList.add("modalopen");
  } else {
    document.body.classList.remove("modalopen");
  }

  const userFromStorage = useUserFromStorage();

  return (
    <section id="writepost" className="shadow radius">
      <div className="writepost--write">
        <img src={userFromStorage?.profilePic} alt="write post" />
        <div
          onClick={() => {
            setClicked(true);
          }}
          className="writepost--write--input"
        >
          <h3>What's on your mind, {userFromStorage?.firstname}? </h3>
        </div>
      </div>
      <div className="writepost__icons">
        <div className="writepost__icons--livevideo">
          <img src={liveIcon} alt="" />
          <h3>LiveVideo</h3>
        </div>
        <div
          onClick={() => {
            setClicked(true);
          }}
          className="writepost__icons--photo"
        >
          <img src={photoIcon} alt="" />
          <h3>Photo/Video</h3>
        </div>
        <div className="writepost__icons--smile">
          <img src={smileIcon} alt="" />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
      {clicked && (
        <WritePostModal
          clicked={clicked}
          showWriteModal={() => setClicked(false)}
        />
      )}
    </section>
  );
};

export default WritePost;
