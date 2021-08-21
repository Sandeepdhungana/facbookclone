import React from "react";

const LogOutComp = ({
  image,
  title,
  paragraph = "",
  arrow,
  handleFunction = undefined,
}) => {
  return (
    <div
      onClick={handleFunction ? handleFunction : undefined}
      className="logout__middle"
    >
      <div className="logout__middle-img icons">
        <img src={image} alt="" />
      </div>
      <div className="logout__middle-title">
        <div className="left">
          <h3>{title}</h3>
          {paragraph && <p>{paragraph}</p>}
        </div>
        <div className="right">
          <img src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LogOutComp;
