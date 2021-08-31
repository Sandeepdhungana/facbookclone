import { useEffect } from "react";
import "./PostScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { onePostGetAction } from "../../actions/postAction";
import PageLoader from "../../components/Loader/PageLoader";
import CardTop from "../../components/Cards/CardTop";
import CardDown from "../../components/Cards/CardDown";
import CardComment from "../../components/Comment/CardComment";
import Comments from "../../components/Comment/Comments";
import useUserFromStorage from "../../hooks/useUserFromStorage";
import Cards from "../../components/Cards/Cards";
import CardImage from "../../components/Cards/CardImage";

const PostScreen = ({ match }) => {
  const dispatch = useDispatch();
  const { postId } = match.params;
  const onePostGet = useSelector((state) => state.onePostGet);
  const { loading, onePost } = onePostGet;
  console.log(onePost);
  const {
    postedBy,
    likes,
    comments: postComment,
    _id,
    postCaption,
    postedIn,
  } = onePost ? onePost : {};

  console.log(onePost);

  const getComments = useSelector((state) => state.getComments);
  const { comments } = getComments;
  let postedInn = postedIn ? postedIn : 1;

  const userFromStorage = useUserFromStorage();

  useEffect(() => {
    dispatch(onePostGetAction(postId));
  }, [dispatch, postId]);

  const name = `${postedBy?.firstname}${postedBy?.surname}`;

  const post = {
    _id: onePost?._id,
    likes: onePost?.likes,
    comments: onePost?.comments,
    postCaption: onePost?.postCaption,
    postImage: onePost?.postImage,
    postedBy: {
      _id: onePost?.postedBy._id,
      firstname: onePost?.postedBy.firstname,
      surname: onePost?.postedBy.surname,
      profilePic: onePost?.postedBy.profilePic,
    },
    postedIn: postedIn ? postedIn : 1,
  };

  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <>
          <div className="postscreen-lg">
            <div className="postscreen__image">
              <img src={onePost?.postImage} alt="" />
            </div>
            <div className="postscreen__cards">
              <CardTop
                _id={postedBy?._id}
                profilePic={postedBy?.profilePic}
                firstname={postedBy?.firstname}
                surname={postedBy?.surname}
                postCaption={postCaption}
                postedIn={postedInn}
              />
              <CardDown
                likes={likes}
                comments={comments}
                postComment={postComment}
                postId={_id}
              />
              <CardComment
                profilePic={userFromStorage?.profilePic}
                postId={_id}
              />

              {loading ? (
                <></>
              ) : (
                <>
                  {/* {!loading && !showComment ? <></> : <CardComment postId={postId} />} */}
                  {comments?.map(
                    (comment, i) =>
                      comment.post === postId && (
                        <Comments postId={postId} key={i} comments={comment} />
                      )
                  )}
                </>
              )}
            </div>
          </div>

          <div className="postscreen__sm">
            <Cards post={post} />
          </div>
        </>
      )}
    </>
  );
};

export default PostScreen;
