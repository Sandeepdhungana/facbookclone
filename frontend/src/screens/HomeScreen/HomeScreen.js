import React, { useEffect, useRef } from "react";
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

const HomeScreen = ({ history, location }) => {
  const dispatch = useDispatch();
  const postGet = useSelector((state) => state.postGet);

  const { loading, posts } = postGet;
  // console.log(posts);

  // const redirect = !loginuserinfo.userDetails ? "/login" : "/home";

  const userfromstorage = localStorage.getItem("userDetails");
  // const

  useEffect(() => {
    socket.once("POST_SUBMISSION_DATA", function (data) {
      console.log(data);
      dispatch({
        type: POST_SUBMISSON_DATA_RECEIVED,
        payload: data,
      });
    });

    return () => socket.disconnect();
  }, [dispatch]);
  useEffect(() => {
    if (!userfromstorage) {
      history.push("/login");
    } else {
      dispatch(postGetAction());
    }
  }, [dispatch, userfromstorage, history]);
  const name = [
    "Sandeep Dhungana",
    "Sushila Subedi",
    "Shova Nyaupane",
    "Kushal Dhunana",
    "Aayusha Dhungana",
  ];
  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <main className="grids">
          <SideBarLeft />
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
              <WritePost />
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
