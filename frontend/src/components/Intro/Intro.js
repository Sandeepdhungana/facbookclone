import "./Intro.css";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import HomeIcon from "@material-ui/icons/Home";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import { useSelector } from "react-redux";

const Intro = () => {
  const profileGet = useSelector((state) => state.profileGet);
  const { profile } = profileGet;

  const postImages = profile?.postImages;

  const allImages = postImages.filter((image) => image.length !== 0);
  const imageIndex = Math.floor(Math.random() * allImages.length);
  const image = postImages[imageIndex];
  return (
    <div className="intro">
      <div className="intro__heading">
        <h1>Intro</h1>
      </div>
      <div className="intro__details">
        <LocalMallIcon /> <h3>Not yet Working</h3>
      </div>
      <div className="intro__details">
        <MenuBookIcon />
        <h3>Studied at GGIC</h3>
      </div>
      <div className="intro__details">
        <HomeIcon />
        <h3>
          Lives in <strong>Kathmandu,Nepal</strong>
        </h3>
      </div>
      <div className="intro__details">
        <LocationOnIcon />
        <h3>
          From <strong>Bhojpur,Nepal</strong>
        </h3>
      </div>
      <div className="intro__details">
        <RssFeedIcon />
        <h3>
          Followed by <strong>293 people</strong>
        </h3>
      </div>
      <div className="image">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Intro;
