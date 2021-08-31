import React, { useRef, useEffect } from "react";
const MessengerRightBottom = () => {
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
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am message</h1>
      <h1>I am sa</h1>
      <h1>I am sa</h1>
    </div>
  );
};

export default MessengerRightBottom;
