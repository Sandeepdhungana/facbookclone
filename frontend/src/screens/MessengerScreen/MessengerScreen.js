import { Helmet } from "react-helmet";
import MessengerLeftBottom from "../../components/MessengerScreenComp/MessengerLeftBottom";
import MessengerLeftTop from "../../components/MessengerScreenComp/MessengerLeftTop";
import MessengerRightBottom from "../../components/MessengerScreenComp/MessengerRightBottom";
import MessengerRightTop from "../../components/MessengerScreenComp/MessengerRightTop";
import "./MessengerScreen.css";
import "../../components/MessengerScreenComp/MessengerScreenComp.css";
import MessengerRightInput from "../../components/MessengerScreenComp/MessengerRightInput";

const MessengerScreen = () => {
  return (
    <>
      <Helmet>
        <title>{"Messenger"}</title>
        <link rel="icon" href="/messenger.ico" />
      </Helmet>
      <div className="messengerscreen">
        <div className="messengerscreen__left">
          <MessengerLeftTop />
          <MessengerLeftBottom />
        </div>
        <div className="messengerscreen__right">
          <MessengerRightTop />
          <MessengerRightBottom />
          <MessengerRightInput />
        </div>
      </div>
    </>
  );
};

export default MessengerScreen;
