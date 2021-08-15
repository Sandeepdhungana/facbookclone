import React from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const Comments = ({ profilePic }) => {
  return (
    <div className="comments">
      <div className="comments__profilepic">
        <img src={profilePic} alt="" />
      </div>
      <div className="comments__comments">
        <div className="commentedby">
          <h2>Sandeep Dhungana</h2>
          <MoreHorizIcon />
        </div>
        <div className="comments__comments--text">
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            facere aspernatur illo consequatur ut vel et impedit rem quae saepe
            id, doloribus temporibus quo earum cumque provident laudantium
            laboriosam dolores!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Comments;
