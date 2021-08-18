const usePostExists = (comments, postId) => {
  return comments?.some((p) => p.post === postId);
};

export default usePostExists;
