import React from "react";

const CardImage = ({ postImage }) => {
  return (
    <>
      {postImage && (
        <div className="postcards__image">
          <img src={postImage} alt="" />
        </div>
      )}
    </>
  );
};

export default CardImage;
