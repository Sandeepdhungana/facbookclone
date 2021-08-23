import "./Photos.css";
import { useSelector } from "react-redux";

const Photos = () => {
  const profileGet = useSelector((state) => state.profileGet);
  const { profile } = profileGet;

  const postImages = profile?.postImages;
  console.log(postImages);
  return (
    <div className="photos">
      <div className="photos__heading">
        <h1>Photos</h1>
        <h2>See All Photos</h2>
      </div>
      <div className="photos__heading--photos">
        {postImages.map((images, i) => {
          return images ? <img src={images} alt="" /> : null;
        })}
        {postImages.map((images, i) => {
          return images ? <img src={images} alt="" /> : null;
        })}
        {postImages.map((images, i) => {
          return images ? <img src={images} alt="" /> : null;
        })}
        {postImages.map((images, i) => {
          return images ? <img src={images} alt="" /> : null;
        })}
        {postImages.map((images, i) => {
          return images ? <img src={images} alt="" /> : null;
        })}
        {postImages.map((images, i) => {
          return images ? <img src={images} alt="" /> : null;
        })}
        {postImages.map((images, i) => {
          return images ? <img src={images} alt="" /> : null;
        })}
        {postImages.map((images, i) => {
          return images ? <img src={images} alt="" /> : null;
        })}
        {postImages.map((images, i) => {
          return images ? <img src={images} alt="" /> : null;
        })}
      </div>
    </div>
  );
};

export default Photos;
