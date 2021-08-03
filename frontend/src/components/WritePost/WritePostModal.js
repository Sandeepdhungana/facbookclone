import React, { useState } from "react";
import "./WritePostModal.css";
import profilePic from "../../assets/img/profilepic.jpg";
import PeopleRoundedIcon from "@material-ui/icons/PeopleRounded";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";
import photoIcon from "./icons/photoIcon.png";
import smileIcon from "./icons/smileIcon.png";
import friendRequestIcon from "./icons/friendRequestIcon.png";
import mikeIcon from "./icons/mikeIcon.png";
import locationIcon from "./icons/locationIcon.png";

import ClearRoundedIcon from "@material-ui/icons/ClearRounded";

const WritePostModal = ({ clicked, showWriteModal }) => {
  const [postCaption, setPostCaption] = useState("");
  const [postImage, setPostImage] = useState("");
  const increaseTextArea = () => {
    const tx = document.getElementsByTagName("textarea");
    for (let i = 0; i < tx.length; i++) {
      tx[i].setAttribute(
        "style",
        "height:" + tx[i].scrollHeight + "px;overflow-y:hidden;"
      );
      tx[i].addEventListener("input", OnInput, false);
    }

    function OnInput() {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    }
  };

  const handleChange = (text) => (e) => {
    if (text === "writepost" && text === "uploadimage") {
      if (e.target.files.length !== 0) {
        setPostImage(URL.createObjectURL(e.target.files[0]));
      }
      setPostCaption(e.target.value);
    } else if (text === "writepost") {
      setPostCaption(e.target.value);
    } else if (text === "uploadimage") {
      if (e.target.files.length !== 0) {
        setPostImage(URL.createObjectURL(e.target.files[0]));
      }
    }
  };

  console.log(postImage);
  const postButtonStyle = {
    background: "#1771E6",
    color: "#FFFFFF",
  };
  increaseTextArea();

  return (
    <div className="overlay">
      <div className="writepostmodal radius shadow">
        <div className="writepostmodal__heading">
          <h1>Create post</h1>
          <ClearRoundedIcon onClick={showWriteModal} />
        </div>
        <div className="writepostmodal__name padding-lr-2">
          <img src={profilePic} alt="" />
          <div className="writepostmodal__name--name">
            <h2>Sandeep Dhungana</h2>
            <div className="writepostmodal__name--privacy">
              <PeopleRoundedIcon />
              <p>Friends</p>
              <ArrowDropDownRoundedIcon />
            </div>
          </div>
        </div>
        <div className="writepostmodal__write padding-lr-2">
          <textarea
            onChange={handleChange("writepost")}
            value={postCaption}
            placeholder="What's on your mind, Sandeep?"
          ></textarea>
          <img src={postImage} alt="" />
        </div>
        <div className="writepostmodal__uploadimage padding-lr-2 shadow">
          <input
            onChange={handleChange("uploadimage")}
            type="file"
            name="image"
            id="image"
            multiple
          />
          <div className="writepostmodal__text">
            <h2>Add to your post</h2>
          </div>
          <div className="writepostmodal__icons">
            <li>
              <img src={photoIcon} alt="" />
            </li>
            <li>
              <img src={friendRequestIcon} alt="" />
            </li>
            <li>
              <img src={smileIcon} alt="" />
            </li>
            <li>
              <img src={locationIcon} alt="" />
            </li>
            <li>
              <img src={mikeIcon} alt="" />
            </li>
            <li>
              <MoreHorizRoundedIcon />
            </li>
          </div>
        </div>
        <div className="wirtepostmodal__button padding-lr-2">
          <button
            style={postCaption || postImage ? postButtonStyle : null}
            className="writepostmodal__btn radius"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default WritePostModal;
