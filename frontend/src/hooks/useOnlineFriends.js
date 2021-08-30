const filterOnlineFriend = (peopleUserMayKnowId, onlineUsers) => {
  // return peopleUserMayKnowId === onlineUsersId;
  return onlineUsers.some((x) => x.userId === peopleUserMayKnowId);
};

const useOnlineFriends = (onlineUsers, peopleUserMayKnow) => {
  // return peopleUserMayKnow?.filter((people) =>
  //   onlineUsers?.includes(people._id)
  // );
  // const result = peopleUserMayKnow?.filter(
  //   ({ _id }) => !onlineUsers?.some((x) => x.id !== _id)
  // );
  // console.log(result);

  return peopleUserMayKnow?.filter(({ _id }) => {
    return filterOnlineFriend(_id, onlineUsers);
  });
  // return peopleUserMayKnow?.forEach(({ _id }) => {
  //   console.log(filterOnlineFriend(_id, onlineUsers));
  // });
};

export { useOnlineFriends };
