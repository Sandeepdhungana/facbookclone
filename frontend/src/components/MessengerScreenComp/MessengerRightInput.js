import AddCircleIcon from "@material-ui/icons/AddCircle";
import PhotoIcon from "@material-ui/icons/Photo";
import GifIcon from "@material-ui/icons/Gif";
import NoteIcon from "@material-ui/icons/Note";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import SendIcon from "@material-ui/icons/Send";
import { useState } from "react";

const MessengerRightInput = () => {
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = (e) => {
    e.preventDefault();
  };
  return (
    <div className="messengerright__input">
      <div className="messenger__input--left">
        <div className="messengerright__input-icons">
          <AddCircleIcon />
        </div>
        {!message && (
          <>
            <div className="messengerright__input-icons">
              <PhotoIcon />
            </div>
            <div className="messengerright__input-icons">
              <NoteIcon />
            </div>
            <div className="messengerright__input-icons">
              <GifIcon />
            </div>
          </>
        )}
      </div>
      <div className="messenger__input--middle">
        <form onSubmit={sendMessage}>
          <input onChange={handleChange} type="text" placeholder="Aa" />
        </form>
        <div className="messengerright__input-icons">
          <EmojiEmotionsIcon />
        </div>
      </div>
      <div className="messenger__input--right">
        {!message && (
          <div className="messenger__input--right-like">
            <ThumbUpAltIcon />
          </div>
        )}
        {message && (
          <div className="messenger__input--right-send">
            <SendIcon />
          </div>
        )}
      </div>
    </div>
  );
};

export default MessengerRightInput;
