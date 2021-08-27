import "./CardButton.css";

const CardButton = ({ styles = {}, handleClick, text }) => {
  return (
    <button style={styles} onClick={handleClick} className="cardbutton">
      {text}
    </button>
  );
};

export default CardButton;
