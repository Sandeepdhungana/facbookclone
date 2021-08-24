import "./Photos.css";
import { useSelector } from "react-redux";

const Photos = () => {
  const profileGet = useSelector((state) => state.profileGet);
  const { profile } = profileGet;

  const postImages = profile?.postImages;
  return (
    <div className="photos">
      <div className="photos__heading">
        <h1>Photos</h1>
        <h2>See All Photos</h2>
      </div>
      <div className="photos__heading--photos">
        {postImages.map((images, i) => {
          return images ? (
            <div key={i} className="photos__heading--photos-wrapper">
              <img src={images} alt="" />
            </div>
          ) : null;
        })}
        {postImages.map((images, i) => {
          return images ? (
            <div key={i} className="photos__heading--photos-wrapper">
              <img src={images} alt="" />
            </div>
          ) : null;
        })}
        {postImages.map((images, i) => {
          return images ? (
            <div key={i} className="photos__heading--photos-wrapper">
              <img src={images} alt="" />
            </div>
          ) : null;
        })}
        {postImages.map((images, i) => {
          return images ? (
            <div key={i} className="photos__heading--photos-wrapper">
              <img src={images} alt="" />
            </div>
          ) : null;
        })}
        {postImages.map((images, i) => {
          return images ? (
            <div key={i} className="photos__heading--photos-wrapper">
              <img src={images} alt="" />
            </div>
          ) : null;
        })}
        {postImages.map((images, i) => {
          return images ? (
            <div key={i} className="photos__heading--photos-wrapper">
              <img src={images} alt="" />
            </div>
          ) : null;
        })}
        {postImages.map((images, i) => {
          return images ? (
            <div key={i} className="photos__heading--photos-wrapper">
              <img src={images} alt="" />
            </div>
          ) : null;
        })}
        {postImages.map((images, i) => {
          return images ? (
            <div key={i} className="photos__heading--photos-wrapper">
              <img src={images} alt="" />
            </div>
          ) : null;
        })}
        {postImages.map((images, i) => {
          return images ? (
            <div key={i} className="photos__heading--photos-wrapper">
              <img src={images} alt="" />
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default Photos;
