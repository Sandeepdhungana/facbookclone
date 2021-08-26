import "./FindFriendLeft.css";
import settingIcon from "../../assets/img/setting.png";
import arrow from "../../assets/img/arrow.png";
import birthdayIcon from "../../assets/img/FriendIcon/birthdayIcon.png";
import friendAllIcon from "../../assets/img/FriendIcon/friendAllIcon.png";
import friendIcon from "../../assets/img/FriendIcon/friendIcon.png";
import friendRequestIcon from "../../assets/img/FriendIcon/friendRequestIcon.png";
import LogOutComp from "../LogOut/LogOutComp";

const FindFriendLeft = () => {
  const icons = [
    {
      image: friendIcon,
      title: "Home",
    },
    {
      image: friendRequestIcon,
      title: "Friend request",
      arrow,
    },
    {
      image: friendRequestIcon,
      title: "Suggestions",
      arrow,
    },
    {
      image: friendAllIcon,
      title: "All friends",
      arrow,
    },
    {
      image: birthdayIcon,
      title: "Birthdays",
      arrow,
    },
    {
      image: friendAllIcon,
      title: "Custom List",
    },
  ];
  return (
    <div className="findfriendleft shadow">
      <div className="findfriendleft__top">
        <h1>Friends</h1>
        <div className="findfriendleft__top-setting">
          <img src={settingIcon} alt="" />
        </div>
      </div>

      <div className="findfriendleft__top--list">
        {icons.map((icon, i) => {
          return (
            <LogOutComp
              key={i}
              image={icon.image}
              title={icon.title}
              paragraph={icon.paragraph}
              arrow={icon.arrow}
              handleFunction={icon.handleFunction}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FindFriendLeft;
