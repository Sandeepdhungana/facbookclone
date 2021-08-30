import { useEffect } from "react";
import "./PostScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { onePostGetAction } from "../../actions/postAction";
import PageLoader from "../../components/Loader/PageLoader";
import CardTop from "../../components/Cards/CardTop";
import CardDown from "../../components/Cards/CardDown";
import CardComment from "../../components/Comment/CardComment";
import Comments from "../../components/Comment/Comments";

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

  const getComments = useSelector((state) => state.getComments);
  const { comments } = getComments;
  console.log(postCaption);
  let postedInn = postedIn ? postedIn : 1;

  useEffect(() => {
    dispatch(onePostGetAction(postId));
  }, []);

  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <div className="postscreen">
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
            <CardComment profilePic={postedBy?.profilePic} postId={_id} />

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
      )}
    </>
  );
};

export default PostScreen;
