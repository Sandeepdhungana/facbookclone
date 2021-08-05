import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import SideBarRight from "../../components/SideBarRight/SideBarRight";
import SideBarLeft from "../../components/SideBarLeft/SideBarLeft";
import Cards from '../../components/Cards/Cards'
import StoryCard from "../../components/StoryCard/StoryCard";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import "./HomeScreen.css";
import { Link } from "react-router-dom";
import WritePost from "../../components/WritePost/WritePost";

const HomeScreen = () => {
  const name = [
    "Sandeep Dhungana",
    "Sushila Subedi",
    "Shova Nyaupane",
    "Kushal Dhunana",
    "Aayusha Dhungana",
  ];
  return (
    <>
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
            {Array(5).fill().map((_,index) =>{
              return <Cards key={index}/>
            })}
          </div>
        </div>
        <SideBarRight />
      </main>
    </>
  );
};

export default HomeScreen;
