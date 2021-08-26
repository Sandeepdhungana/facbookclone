import FindFriendLeft from "../../components/FindFriendLeft/FindFriendLeft";
import FindFriendMain from "../../components/FindFriendMain/FindFriendMain";
import "./FindFriendScreen.css";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { findFriendAction } from "../../actions/findFriendAction";
import PageLoader from "../../components/Loader/PageLoader";

const FindFriendScreen = () => {
  const dispatch = useDispatch();
  const findFriend = useSelector((state) => state.findFriend);
  const { loading } = findFriend;

  useEffect(() => {
    dispatch(findFriendAction());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Friends | Facebook</title>
      </Helmet>
      {loading ? (
        <PageLoader />
      ) : (
        <div className="findfriendscreen">
          <FindFriendLeft />
          <FindFriendMain />
        </div>
      )}
    </>
  );
};

export default FindFriendScreen;
