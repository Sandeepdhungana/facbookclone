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
import { SOCKET_COMMENT_RECEIVED } from "../../constants/socketConstants";
import socket from "../../socket";
import CommentLoader from "../Loader/CommentLoader";
import usePostExists from "../../hooks/usePostExists";

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
  const postExists = usePostExists(comments, postId);
  console.log(comments, postId);
  console.log(postExists);

  const handleShowComment = () => {
    if (postExists) {
      setShowComment(true);
    }
  };

  useEffect(() => {
    socket.on("COMMENT_SENT", (data) => {
      // console.log("the comment recieved fromsocket", data);

      if (data[0].post === postId) {
        console.log("The data from socket is", data);
        dispatch({
          type: SOCKET_COMMENT_RECEIVED,
          payload: data,
        });
      }
    });

    return () => {
      socket.off("COMMENT_SENT");
    };
  }, [dispatch, comments?.length, postId]);
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
      <CardComment postId={postId} />

      {loading ? (
        <>{!postExists && <CommentLoader bgColor={"#1877F2"} />}</>
      ) : (
        <>
          {/* {!loading && !showComment ? <></> : <CardComment postId={postId} />} */}
          {comments?.map(
            (comment, i) =>
              comment.post === postId && (
                <Comments postId={postId} key={i} comments={comment} />
              )
          )}
        </>
      )}
    </section>
  );
};

export default Cards;
