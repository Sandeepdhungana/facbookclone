const filterOnlineFriend = (myFriendsId, onlineUsers) => {
  return onlineUsers.some((x) => x.userId === myFriendsId);
};

const useOnlineFriends = (onlineUsers, myfriends) => {
  // console.log("Inside hooks", onlineUsers);
  // console.log("Inside hooks", myfriends);

  const result = myfriends?.filter(({ _id }) => {
    return filterOnlineFriend(_id, onlineUsers);
  });
  return result;
};

export { useOnlineFriends };
