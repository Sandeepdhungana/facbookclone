import "./ProfileTop.css";
import coverpic from "../../assets/img/coverpic.jpg";
import profilepic from "../../assets/img/profilepic.jpg";
import friendsIcon from "../../assets/img/friendsicon.png";
import Button from "../Button/Button";

const ProfileTop = () => {
  const coverStyle = {
    backgroundImage: `url(${coverpic})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
    backgroundRepeat: "no-repeat",
    borderRadius: "0 0 10px 10px",
  };

  const messageIcon = <i class="fab fa-facebook-messenger"></i>;
  const dotsIcon = <i class="fas fa-ellipsis-h"></i>;
  const buttons = [
    {
      name: "Friends",
      icon: friendsIcon,
      background: "#F0F2F5",
      image: true,
      color: "black",
    },
    {
      name: "Message",
      icon: messageIcon,
      background: "#1977F3",
      image: false,
      color: "white",
    },
    {
      name: "",
      icon: dotsIcon,
      background: "#F0F2F5",
      image: false,
      color: "black",
    },
  ];
  return (
    <div className="profiletop shadow">
      <div className="profiletop__coverpic-wrapper">
        <div style={coverStyle} className="profiletop__coverpic">
          {/* <img src={coverpic} alt="" /> */}
          <div className="profiletop__profilepic-wrapper">
            <div className="profiletop__profilepic">
              <img src={profilepic} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="profiletop__name-wrapper">
        <div className="profiletop__name">
          <h1>Milan Karki</h1>
        </div>
      </div>

      <div className="profiletop__menu-wrapper">
        <div className="profiletop__menu">
          <div className="profiletop__menu-list">
            <li>Posts</li>
            <li>About</li>
            <li>Friends</li>
            <li>Photos</li>
            <li>Videos</li>
            {/* <li>Check-ins</li> */}
            <li>More</li>
          </div>
          <div className="profiletop__button">
            {buttons.map((button, i) => {
              return <Button key={i} button={button} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTop;

// import "./ProfileTop.css";
// import coverpic from "../../assets/img/coverpic.jpg";
// import profilepic from "../../assets/img/profilepic.jpg";

// const ProfileTop = () => {
//   return (
//     <div className="profiletop">
//       <div className="profiletop__coverpic">
//         <img src={coverpic} alt="" />
//         <div className="profiletop__profilepic">
//           <img className="profilepic" src={profilepic} alt="" />
//           <h1>Sandeep Dhungana</h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileTop;

{
  /* <div className="profiletop__coverpic">
<img src={coverpic} alt="" />
</div>
<div className="profiletop__profliepic">
<img className="profilepic" src={profilepic} alt="" />

</div> */
}
