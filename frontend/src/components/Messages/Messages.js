import "./Messages.css";

const Messages = ({ profilePic, message, received }) => {
  const receivedStyle = {
    justifyContent: "flex-start",
  };
  const sentStyle = {
    justifyContent: "flex-end",
  };
  const receivedBackground = {
    background: "#E4E6EB",
  };
  const sentBackground = {
    background: "#0084FF",
    color: "#FFFFFF",
    marginRight: "1rem",
  };
  const messageBackground = received ? receivedBackground : sentBackground;
  const messageStyle = received ? receivedStyle : sentStyle;
  return (
    <div style={messageStyle} className="messages">
      {received && (
        <div className="messages__senderpic">
          <img src={profilePic} alt="" />
        </div>
      )}
      <div style={messageBackground} className="messages__message">
        <h3>{message}</h3>
      </div>
    </div>
  );
};

export default Messages;
