import React, { useRef, useState } from "react";
import profilePic from "../../assets/img/profilepic.jpg";
import "./Cards.css";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import CardTop from "./CardTop";
import CardImage from "./CardImage";
import CardDown from "./CardDown";
import "./CardComment.css";
import CardComment from "./CardComment";
TimeAgo.addDefaultLocale(en);

const Cards = ({
  post: {
    _id: postId,
    comments,
    likes,
    postCaption,
    postImage,
    postedBy: { firstname, surname },
    postedIn,
  },
}) => {
  const [showComment, setShowComment] = useState(false);

  const handleShowComment = () => {
    setShowComment(!showComment);
  };

  return (
    <section id="postcards" className="shadow radius">
      <CardTop
        profilePic={profilePic}
        firstname={firstname}
        surname={surname}
        postCaption={postCaption}
        postedIn={postedIn}
      />
      <CardImage postImage={postImage} />
      <CardDown
        likes={likes}
        comments={comments}
        postId={postId}
        handleShowComment={handleShowComment}
      />
      {showComment && <CardComment />}
    </section>
  );
};

export default Cards;
