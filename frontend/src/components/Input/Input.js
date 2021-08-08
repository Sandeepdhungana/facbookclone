import React from "react";
import "./Input.css";

const Input = ({
  name,
  value,
  type,
  placeholder,
  width,
  handleNameAndPassword,
}) => {
  return (
    <div className="input">
      <input
        onChange={handleNameAndPassword}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        style={{ width }}
      />
    </div>
  );
};

export default Input;
