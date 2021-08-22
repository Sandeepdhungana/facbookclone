import React from "react";
import { useSelector } from "react-redux";
import Cards from "../Cards/Cards";
import Friends from "../Friends/Friends";
import Intro from "../Intro/Intro";
import Photos from "../Photos/Photos";
import WritePost from "../WritePost/WritePost";
import "./ProfileDown.css";

const ProfileDown = () => {
  const postGet = useSelector((state) => state.postGet);

  const { loading, posts } = postGet;
  console.log(posts);
  const disableClick = true;
  const text = `Write something to Milan...`;
  return (
    <div className="profiledown">
      <div className="profiledown__content">
        <div className="profiledown__content--left">
          <Intro />
          <Photos />
          <Friends />
        </div>
        <div className="profiledown__content--right">
          <WritePost disableClick={disableClick} text={text} />
          {posts.map((post, index) => {
            return <Cards key={index} post={post} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileDown;
