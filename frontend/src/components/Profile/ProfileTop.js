import "./ProfileTop.css";
import coverpic from "../../assets/img/coverpic.jpg";
// import profilepic from "../../assets/img/profilepic.jpg";
import friendsIcon from "../../assets/img/friendsicon.png";
import Button from "../Button/Button";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { useIsMyProfile } from "../../hooks/useIsMyProfile";
import { useCloseModal } from "../../hooks/useCloseModal";
import { useClicked } from "../../hooks/useClicked";
import WritePostModal from "../WritePost/WritePostModal";
import "../WritePost/WritePostModal.css";
import "../WritePost/WritePost.css";
import { updateUserAction } from "../../actions/userAction";

const ProfileTop = ({ coverPic }) => {
  const profileGet = useSelector((state) => state.profileGet);
  const { profile } = profileGet;

  const [showMenu, setShowMenu] = useState(true);
  const changeModalRef = useRef();
  // const userFromStorage = useUserFromStorage();
  const { dropDownClicked, handleElementClicked, closeModal } = useCloseModal();
  const { disableClick, clicked, clickedModal } = useClicked(false);
  const [text, setText] = useState();
  console.log();

  const user = profile?.user;
  const isMyProfile = useIsMyProfile(user);

  // console.log(isMyProfile);
  const { firstname, surname, profilePic } = user;

  const profileTopName = useRef();
  const profileMenu = useRef();
  const profileTopMenu = useRef();
  const profileName = useRef();

  const coverStyle = {
    backgroundImage: `url(${profile.user?.coverPic})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
    backgroundRepeat: "no-repeat",
    borderRadius: "0 0 10px 10px",
  };

  const messageIcon = <i className="fab fa-facebook-messenger"></i>;
  const dotsIcon = <i className="fas fa-ellipsis-h"></i>;
  const buttons = [
    {
      name: "Friends",
      icon: friendsIcon,
      background: "#F0F2F5",
      image: true,
      color: "black",
      show: !isMyProfile,
    },
    {
      name: "Message",
      icon: messageIcon,
      background: "#1977F3",
      image: false,
      color: "white",
      show: !isMyProfile,
    },
    {
      name: "",
      icon: dotsIcon,
      background: "#F0F2F5",
      image: false,
      color: "black",
      show: true,
    },
  ];

  // let profileTopName = document.querySelector(".profiletop__menu-wrapper");
  useEffect(() => {
    const options = {
      rootMargin: "-50px 0px 0px 0px",
    };
    const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          profileMenu.current?.classList.add("pmr");
          profileMenu.current?.classList.add("shadow");
          setShowMenu(false);
        } else {
          profileMenu.current?.classList.remove("pmr");
          profileMenu.current?.classList.remove("shadow");
          setShowMenu(true);
        }
      });
    }, options);

    observer.observe(profileTopName.current);
  }, []);

  useEffect(() => {
    window.onclick = (e) => {
      closeModal(changeModalRef, e);
    };
  }, [closeModal]);

  return (
    <div className="profiletop shadow">
      <div className="profiletop__coverpic-wrapper">
        <div style={coverStyle} className="profiletop__coverpic">
          {/* <img src={coverpic} alt="" /> */}
          <div className="profiletop__profilepic-wrapper">
            <div className="profiletop__profilepic">
              <img onClick={handleElementClicked} src={profilePic} alt="" />
              {isMyProfile && dropDownClicked && (
                <>
                  <div
                    ref={changeModalRef}
                    className="profiletop__change-photo shadow"
                  >
                    <h2
                      onClick={() => {
                        clickedModal(true);
                        setText("profile");
                      }}
                    >
                      Change profile picture
                    </h2>
                    <h2
                      onClick={() => {
                        clickedModal(true);
                        setText("cover");
                      }}
                    >
                      Change cover picture
                    </h2>
                  </div>

                  {/* {!disableClick && clicked && (
                    <WritePostModal
                      clicked={clicked}
                      submitAction={updateUserAction}
                      showWriteModal={() => clickedModal(false)}
                      showTextArea={true}
                      headingText={"Create post"}
                      uploadText={"Add to your post"}
                      buttonText={"Post"}
                    />
                  )} */}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div ref={profileTopName} className="profiletop__name-wrapper">
        <div className="profiletop__name">
          <h1>
            {firstname} {surname}
          </h1>
        </div>
      </div>

      <div ref={profileMenu} className="profiletop__menu-wrapper">
        <div className="profiletop__menu">
          {showMenu && (
            <div ref={profileTopMenu} className="profiletop__menu-list">
              <li>Posts</li>
              <li>About</li>
              <li>Friends</li>
              <li>Photos</li>
              <li>Videos</li>
              <li>More</li>
            </div>
          )}
          {!showMenu && (
            <div ref={profileName} className="profiletop__menu--names">
              <img src={profilePic} alt="profilepic" />
              <h2>
                {firstname} {surname}
              </h2>
            </div>
          )}
          <div className="profiletop__button">
            {buttons.map((button, i) => {
              return <Button key={i} button={button} />;
            })}
          </div>
        </div>
      </div>
      {!disableClick && clicked && (
        <WritePostModal
          clicked={clicked}
          submitAction={updateUserAction}
          showWriteModal={() => clickedModal(false)}
          showTextArea={false}
          headingText={`Update ${text} Picture`}
          uploadText={`Choose ${text} picture`}
          buttonText={"Upload"}
          type={text}
        />
      )}
    </div>
  );
};

export default ProfileTop;
