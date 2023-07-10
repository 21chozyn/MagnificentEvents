import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
const index = ({ icon, label, handleData }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState(""); //value of input field
  const inputRef = useRef(null);

  const handleClick = () => {
    setIsFocused(true);
  };
  const handleMouseLeave = () => {
    handleData({ inputValue: inputValue, label: label }); //this send data in the input up to the parent
    inputValue === "" && setIsFocused(false);
  };
  useEffect(() => {
    inputRef.current.focus();
  }, [isFocused]);


  return (
    <div
      className="input-container"
      onClick={handleClick}
      onMouseLeave={handleMouseLeave}
    >
      <div className="icon-container">{icon}</div>
      <div>
        <span>{label}</span>
        <input
          name={label.split(" ")[0]}
          id={label.split(" ")[0]}
          required
          maxLength="45"
          ref={inputRef}
          value={inputValue}
          className="txt-input"
          type={
            label === "Email" ? "email" : label === "Phone" ? "number" : "text"
          }
          style={{ display: isFocused ? "block" : "none" }}
          onChange={() => setInputValue(inputRef.current.value)}
        />
      </div>
    </div>
  );
};

export default index;
