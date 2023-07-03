//this component is used in the about page
import React from "react";
import "./index.scss";

const index = ({ reason, reasonText, icon }) => {
  return (
    <div className="choice-container">
      <div className="icon-container">{icon !== null && icon}</div>
      <h2>{reason}</h2>
      <p>{reasonText}</p>
    </div>
  );
};

export default index;
