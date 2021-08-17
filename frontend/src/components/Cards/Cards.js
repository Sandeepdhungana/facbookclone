import React, { useRef, useState } from "react";
import "./Cards.css";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import CardTop from "./CardTop";
import CardImage from "./CardImage";
import CardDown from "./CardDown";
import CardComment from "../Comment/CardComment";
import Comments from "../Comment/Comments";
import { useSelector } from "react-redux";
import ButtonLoader from "../Loader/ButtonLoader";

TimeAgo.addDefaultLocale(en);

const Cards = ({
  post: {
    _id: postId,
    likes,
    postCaption,
    postImage,
    postedBy: { firstname, surname, profilePic },
    postedIn,
  },
}) => {
  const [showComment, setShowComment] = useState(false);


  const getComments = useSelector((state) => state.getComments);
  const { loading, comments, error } = getComments;

  console.log("the comment is", comments);
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
      <CardDown likes={likes} comments={comments} postId={postId} />
      {showComment && <CardComment postId={postId} />}
      {loading ? (
        <ButtonLoader />
      ) : (
        <>
          {comments.map((comments, i) => (
            <Comments postId={postId} key={i} comments={comments} />
          ))}
        </>
      )}
    </section>
  );
};

export default Cards;
