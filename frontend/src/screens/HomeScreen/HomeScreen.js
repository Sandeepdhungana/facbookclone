import React, { useEffect } from "react";
import SideBarRight from "../../components/SideBarRight/SideBarRight";
import SideBarLeft from "../../components/SideBarLeft/SideBarLeft";
import Cards from "../../components/Cards/Cards";
import StoryCard from "../../components/StoryCard/StoryCard";
import "./HomeScreen.css";
import WritePost from "../../components/WritePost/WritePost";
import { useDispatch, useSelector } from "react-redux";
import { postGetAction } from "../../actions/postAction";
import PageLoader from "../../components/Loader/PageLoader";
import socket from "../../socket";
import { POST_SUBMISSON_DATA_RECEIVED } from "../../constants/postConstant";
import { Helmet } from "react-helmet";
import useUserFromStorage from "../../hooks/useUserFromStorage";

const HomeScreen = ({ history, location }) => {
  const userFromStorage = useUserFromStorage();
  const dispatch = useDispatch();
  const postGet = useSelector((state) => state.postGet);
  // console.log(postGet);

  const { loading, posts } = postGet;

  // const redirect = !loginuserinfo.userDetails ? "/login" : "/home";

  const userfromstorage = localStorage.getItem("userDetails");
  // const

  useEffect(() => {
    socket.on("POST_SUBMISSION_DATA", function (data) {
      dispatch({
        type: POST_SUBMISSON_DATA_RECEIVED,
        payload: data,
      });
    });
    if (!userfromstorage) {
      history.push("/login");
    } else {
      dispatch(postGetAction());
    }

    return () => {
      socket.off("POST_SUBMISSION_DATA");
    };
  }, [dispatch, userfromstorage, history]);
  const name = [
    "Sandeep Dhungana",
    "Sushila Subedi",
    "Shova Nyaupane",
    "Kushal Dhunana",
    "Aayusha Dhungana",
  ];

  // pass it to the writepost component because it should be dynamic as same component is used in profile page also
  // disbale click set to false means the compoment is clickabale if true component is unclickable
  // text is coming from profile page also so make it dynamic
  const disableClick = false;
  const text = `What's on your mind ${userFromStorage?.firstname}`;
  return (
    <>
      <Helmet>
        <title>
          {userFromStorage &&
            `${userFromStorage?.firstname} ${userFromStorage?.surname}`}
        </title>
      </Helmet>
      {loading ? (
        <PageLoader />
      ) : (
        <main className="grids">
          <SideBarLeft profilePic={userFromStorage?.profilePic} />
          <div className="card__container">
            <div className="card__container--story">
              {name.map((name, i) => {
                return <StoryCard name={name} key={i} />;
              })}
              {/* <Link to="/story">
              <div className="card__container--arrow">
                <ArrowForwardIcon />
              </div>
            </Link> */}
            </div>
            <div className="card__container--writepost">
              <WritePost disableClick={disableClick} text={text} />
            </div>
            <div className="card__container--postcard">
              {posts.map((post, index) => {
                return <Cards key={index} post={post} />;
              })}
            </div>
          </div>
          <SideBarRight />
        </main>
      )}
    </>
  );
};

export default HomeScreen;

// {comments,likes,postCaption,postImage,postedBy:{firstname, surname},postedIn}
