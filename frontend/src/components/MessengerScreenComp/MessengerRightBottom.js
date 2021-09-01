import React, { useRef, useEffect } from "react";
import useUserFromStorage from "../../hooks/useUserFromStorage";
import Messages from "../Messages/Messages";
const MessengerRightBottom = () => {
  const userFromStorage = useUserFromStorage();
  const scrollDiv = useRef();
  const scrollToBottom = () => {
    scrollDiv.current.scrollTop =
      scrollDiv.current.scrollHeight - scrollDiv.current.clientHeight;
  };

  useEffect(() => {
    scrollToBottom();
  }, []);
  return (
    <div ref={scrollDiv} className="messenger__right--bottom">
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"hello how are you"}
        received={false}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"I am fine. how are you"}
        received={true}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"hello how are you"}
        received={false}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"I am fine. how are you"}
        received={true}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"hello how are you"}
        received={false}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"I am fine. how are you"}
        received={true}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"hello how are you"}
        received={false}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"I am fine. how are you"}
        received={true}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"hello how are you"}
        received={false}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"I am fine. how are you"}
        received={true}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"hello how are you"}
        received={false}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"I am fine. how are you"}
        received={true}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"hello how are you"}
        received={false}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"I am fine. how are you"}
        received={true}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"hello how are you"}
        received={false}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"I am fine. how are you"}
        received={true}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"hello how are you"}
        received={false}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"I am fine. how are you"}
        received={true}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"hello how are you"}
        received={false}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"I am fine. how are you"}
        received={true}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"hello how are you"}
        received={false}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"I am fine. how are you"}
        received={true}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"hello how are you"}
        received={false}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"I am fine. how are you"}
        received={true}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"hello how are you"}
        received={false}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"I am fine. how are you"}
        received={true}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"hello how are you"}
        received={false}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"I am fine. how are you"}
        received={true}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"hello how are you"}
        received={false}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"I am fine. how are you"}
        received={true}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"hello how are you"}
        received={false}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"I am fine. how are you"}
        received={true}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"hello how are you"}
        received={false}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"I am fine. how are you"}
        received={true}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"hello how are you"}
        received={false}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"I am fine. how are you"}
        received={true}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"hello how are you"}
        received={false}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"I am fine. how are you"}
        received={true}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"hello how are you"}
        received={false}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"I am fine. how are you"}
        received={true}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"hello how are you"}
        received={false}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"I am fine. how are you"}
        received={true}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"hello how are you"}
        received={false}
      />
      <Messages
        profilePic={userFromStorage?.profilePic}
        message={"I am fine. how are you"}
        received={true}
      />
    </div>
  );
};

export default MessengerRightBottom;
