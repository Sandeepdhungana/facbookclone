import React, { useState } from "react";
import "./WritePost.css";

import liveIcon from "./icons/liveIcon.png";
import photoIcon from "./icons/photoIcon.png";
import smileIcon from "./icons/smileIcon.png";
import WritePostModal from "./WritePostModal";
import useUserFromStorage from "../../hooks/useUserFromStorage";

const WritePost = ({ disableClick, text }) => {
  const [clicked, setClicked] = useState(false);
  // it is for making the body unmovable when the modal is active
  if (!disableClick && clicked) {
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
          <h3>{text}</h3>
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
      {!disableClick && clicked && (
        <WritePostModal
          clicked={clicked}
          showWriteModal={() => setClicked(false)}
        />
      )}
    </section>
  );
};

export default WritePost;
