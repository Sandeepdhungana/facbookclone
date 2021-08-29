import useUserFromStorage from "./useUserFromStorage";

const useIsMyProfile = (user) => {
  const userFromStorage = useUserFromStorage();

  return user._id === userFromStorage?._id;
};

export { useIsMyProfile };
