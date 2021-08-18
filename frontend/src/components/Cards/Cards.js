import React, { useEffect, useRef, useState } from "react";
import "./Cards.css";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import CardTop from "./CardTop";
import CardImage from "./CardImage";
import CardDown from "./CardDown";
import CardComment from "../Comment/CardComment";
import Comments from "../Comment/Comments";
import { useDispatch, useSelector } from "react-redux";
import ButtonLoader from "../Loader/ButtonLoader";
import { SOCKET_COMMENT_RECEIVED } from "../../constants/socketConstants";
import socket from "../../socket";
import CommentLoader from "../Loader/CommentLoader";

TimeAgo.addDefaultLocale(en);

const Cards = ({
  post: {
    _id: postId,
    likes,
    comments: postComment,
    postCaption,
    postImage,
    postedBy: { firstname, surname, profilePic },
    postedIn,
  },
}) => {
  const [showComment, setShowComment] = useState(false);
  const dispatch = useDispatch();

  const getComments = useSelector((state) => state.getComments);
  const { loading, comments, error } = getComments;
  const handleShowComment = () => {
    setShowComment(!showComment);
  };
  console.log("Inside the card:", comments);

  useEffect(() => {
    socket.on("COMMENT_SENT", (data) => {
      // console.log("the comment recieved fromsocket", data);
      dispatch({
        type: SOCKET_COMMENT_RECEIVED,
        payload: data,
      });
    });

    return () => {
      socket.off("COMMENT_SENT");
    };
  }, [dispatch, comments?.length]);
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
      <CardDown
        likes={likes}
        comments={comments}
        postComment={postComment}
        postId={postId}
        handleShowComment={handleShowComment}
        showComment={showComment}
      />

      {loading ? (
        <>
          <CommentLoader bgColor={"#1877F2"} />
        </>
      ) : (
        <>
          {!loading && !showComment ? <></> : <CardComment postId={postId} />}
          {comments.map((comments, i) => (
            <Comments postId={postId} key={i} comments={comments} />
          ))}
        </>
      )}
    </section>
  );
};

export default Cards;
