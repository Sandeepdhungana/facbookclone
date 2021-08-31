import React from "react";
import { Link } from "react-router-dom";

const CardImage = ({ postImage, name, postId }) => {
  return (
    <>
      {postImage && (
        <div className="postcards__image">
          <Link to={`/${name}/post/${postId}`}>
            <img src={postImage} alt="" />
          </Link>
        </div>
      )}
    </>
  );
};

export default CardImage;
