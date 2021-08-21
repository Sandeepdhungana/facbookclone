import ProfileTop from "../../components/Profile/ProfileTop";
import WritePost from "../../components/WritePost/WritePost";
import ProfileDown from "../../components/Profile/ProfileDown";
import "./ProfileScreen.css";
import ProfileMenu from "../../components/Profile/ProfileMenu";

const ProfileScreen = () => {
  return (
    <div className="profilescreen">
      <ProfileTop />
      <ProfileDown />
    </div>
  );
};

export default ProfileScreen;

{
  /* <div className="profilescreen__middle">
  <div className="writepost-wrapper">
    <WritePost />
  </div>
</div>; */
}
