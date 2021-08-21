import "./Button.css";

const Button = ({ button: { icon, name, background, image, color } }) => {
  console.log(icon, name, background);
  return (
    <button style={{ background, color }} className="btn-class">
      {image ? <img src={icon} alt="icon" /> : icon} {name}
    </button>
  );
};

export default Button;
