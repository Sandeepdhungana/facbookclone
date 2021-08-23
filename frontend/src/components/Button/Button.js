import "./Button.css";

const Button = ({ button: { icon, name, background, image, color } }) => {
  return (
    <button style={{ background, color }} className="btn-class">
      {image ? <img src={icon} alt="icon" /> : icon} {name}
    </button>
  );
};

export default Button;
