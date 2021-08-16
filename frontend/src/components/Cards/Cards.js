import React, { useRef, useState } from "react";
import "./Cards.css";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import CardTop from "./CardTop";
import CardImage from "./CardImage";
import CardDown from "./CardDown";
import "./CardComment.css";
import CardComment from "./CardComment";
import "./Comments.css";
import Comments from "./Comments";

TimeAgo.addDefaultLocale(en);

const Cards = ({
  post: {
    _id: postId,
    comments,
    likes,
    postCaption,
    postImage,
    postedBy: { firstname, surname, profilePic },
    postedIn,
  },
}) => {
  const [showComment, setShowComment] = useState(false);
  // const [commentLength, setCommentLength] = useState(2);
  // const [text, setText] = useState("more");

  const handleShowComment = () => {
    setShowComment(!showComment);
  };
  // const handleCommentLength = () => {
  //   if (commentLength === comments.length) {
  //     setCommentLength(2);
  //     setText("more");
  //   } else {
  //     setCommentLength(comments.length);
  //     setText("less");
  //   }
  // };
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
      {showComment && <CardComment postId={postId} />}
      {/* {showComment && comments.length !== 0 && commentLength >= 2 ? (
        <h3 className="viewmore" onClick={handleCommentLength}>
          View {text} Comments
        </h3>
      ) : (
        ""
      )} */}
      {showComment && (
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
