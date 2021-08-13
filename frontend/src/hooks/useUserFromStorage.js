const useUserFromStorage = () => {
  const userFromStorage = localStorage.getItem("userDetails")
    ? JSON.parse(localStorage.getItem("userDetails"))
    : null;

  return userFromStorage;
};

export default useUserFromStorage;
