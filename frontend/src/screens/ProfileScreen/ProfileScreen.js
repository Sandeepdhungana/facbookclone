import ProfileTop from "../../components/Profile/ProfileTop";
import ProfileDown from "../../components/Profile/ProfileDown";
import "./ProfileScreen.css";
import { profileGetAction } from "../../actions/profileAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PageLoader from "../../components/Loader/PageLoader";

const ProfileScreen = ({ match }) => {
  const { id: profileId } = match.params;
  const dispatch = useDispatch();

  const profileGet = useSelector((state) => state.profileGet);
  const { loading } = profileGet;

  useEffect(() => {
    dispatch(profileGetAction(profileId));
  }, [dispatch, profileId]);
  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <div className="profilescreen">
          <ProfileTop />
          <ProfileDown />
        </div>
      )}
    </>
  );
};

export default ProfileScreen;

