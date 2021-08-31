import React, { useEffect, useState } from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { Link } from "react-router-dom";
TimeAgo.addDefaultLocale(en);

const CardTop = ({
  _id,
  profilePic,
  firstname,
  surname,
  postCaption,
  postedIn,
}) => {
  const [lengthOfCaption, setLengthOfCaption] = useState(75);
  const [seemore, setSeemore] = useState(true);

  const timeAgo = new TimeAgo("en-US");
  const time = timeAgo.format(postedIn, "mini");
  const [currentTime, setCurrentTime] = useState();

  const handleSeemore = (e) => {
    if (seemore) {
      setSeemore(false);
      setLengthOfCaption(postCaption.length);
    } else {
      setSeemore(true);
      setLengthOfCaption(75);
    }
  };
  // console.log(postImage);

  useEffect(() => {
    setCurrentTime(time);
  }, [time]);
  return (
    <div className="postcards__top">
      <div className="postcards__top--name">
        <div className="postcards__top--name--wrapper">
          <img src={profilePic} alt="Profile Pic" />
          <div className="postcards__top--name--time">
            <Link to={`/profile/${_id}`}>
              <h3>
                {firstname} {surname}
              </h3>
            </Link>
            <p>
              {currentTime}. <i className="fas fa-cog"></i>
            </p>
          </div>
        </div>
        <MoreHorizIcon />
      </div>
      <h3 className="postcards__top--caption">
        {postCaption?.substring(0, lengthOfCaption)}
      </h3>
      {postCaption && postCaption?.length > 100 ? (
        <h2
          onClick={handleSeemore}
          style={{ color: "#6E747C", fontWeight: "400", display: "inline" }}
        >
          {seemore ? "See more..." : "See less..."}
        </h2>
      ) : (
        ""
      )}
    </div>
  );
};

export default CardTop;
