import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCommentAction } from "../../actions/commentAction";
import { postLikeUnlikeAction } from "../../actions/postAction";
import usePostExists from "../../hooks/usePostExists";
import useUserFromStorage from "../../hooks/useUserFromStorage";

const CardDown = ({ likes, comments, postId, postComment, showComment }) => {
  const userFromStorage = useUserFromStorage();
  const [like, setLike] = useState(likes?.includes(userFromStorage?._id));
  const [likeCount, setLikeCount] = useState(parseInt(likes?.length));
  const dispatch = useDispatch();
  const postExists = usePostExists(comments, postId);

  const handleLike = () => {
    setLike(!like);
    dispatch(postLikeUnlikeAction(postId, like));
    if (like) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
  };

  const getComment = () => {
    dispatch(getCommentAction(postId));
  };

  const likeColor = like ? { color: "#056BE1" } : { color: "" };

  return (
    <>
      <div className="postcards__down">
        <div className="postcards__down--showlike">
          <span>
            <img
              src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"
              alt=""
            />
            {/* <p>{likes?.length}</p> */}
            {likeCount >= 1
              ? `
            
            ${
              like
                ? `
                ${
                  likeCount === 1
                    ? `You like this post`
                    : `You and ${likeCount - 1} others like this post`
                }
                
                `
                : `${likeCount} people like this post`
            }
            
            `
              : likeCount}
          </span>
          <div className="postcards__down--info">
            <span>
              {postExists && comments?.length > postComment.length
                ? comments?.length
                : postComment?.length}{" "}
              comments
            </span>
            <span>20 share</span>
          </div>
        </div>
        <div className="postcards__down--icons">
          <div
            className="postcards__down--icons--like radius"
            style={likeColor}
            onClick={handleLike}
          >
            <i className="far fa-thumbs-up"></i>
            <span>Like</span>
          </div>
          <div
            onClick={!showComment ? getComment : undefined}
            className="postcards__down--icons--comment radius"
          >
            <i className="fas fa-comment"></i>
            <span>Comment</span>
          </div>
          <div className="postcards__down--icons--share radius">
            <i className="fas fa-share"></i>
            <span>Share</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDown;
