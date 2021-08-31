import ProfileTop from "../../components/Profile/ProfileTop";
import ProfileDown from "../../components/Profile/ProfileDown";
import "./ProfileScreen.css";
import { profileGetAction } from "../../actions/profileAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PageLoader from "../../components/Loader/PageLoader";
import Helmet from "react-helmet";
import socket from "../../socket";
import { POST_SUBMISSON_DATA_RECEIVED } from "../../constants/postConstant";
import useUserFromStorage from "../../hooks/useUserFromStorage";

const ProfileScreen = ({ match, history }) => {
  const userfromstorage = useUserFromStorage();
  const { id: profileId } = match.params;
  const dispatch = useDispatch();

  const profileGet = useSelector((state) => state.profileGet);
  const { loading, profile } = profileGet;

  const user = profile?.user;
  const title = loading
    ? "Facebook"
    : `${user?.firstname} ${user?.surname} | Facebook`;

  useEffect(() => {
    dispatch(profileGetAction(profileId));
  }, [dispatch, profileId]);

  useEffect(() => {
    socket.on("POST_SUBMISSION_DATA", function (data) {
      dispatch({
        type: POST_SUBMISSON_DATA_RECEIVED,
        payload: data,
      });
    });
    if (!userfromstorage) {
      history.push("/login");
    }

    return () => {
      socket.off("POST_SUBMISSION_DATA");
    };
  }, [dispatch, userfromstorage, history]);

  console.log(loading);
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
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
