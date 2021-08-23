import React from "react";
import { useSelector } from "react-redux";
import useUserFromStorage from "../../hooks/useUserFromStorage";
import Cards from "../Cards/Cards";
import Friends from "../Friends/Friends";
import Intro from "../Intro/Intro";
import Photos from "../Photos/Photos";
import WritePost from "../WritePost/WritePost";
import "./ProfileDown.css";

const ProfileDown = () => {
  const userFromStorage = useUserFromStorage();

  const profileGet = useSelector((state) => state.profileGet);
  const { profile } = profileGet;

  const post = profile?.post;
  const user = profile?.user;

  return (
    <div className="profiledown">
      <div className="profiledown__content">
        <div className="profiledown__content--left">
          <Intro />
          <Photos />
          <Friends />
        </div>
        <div className="profiledown__content--right">
          <WritePost
            disableClick={user._id === userFromStorage._id ? false : true}
            text={
              user._id === userFromStorage._id
                ? `What's on your mind ${userFromStorage?.firstname}?`
                : `Write something to ${user.firstname}...`
            }
          />
          {post.map((post, index) => {
            return <Cards key={index} post={post} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileDown;
