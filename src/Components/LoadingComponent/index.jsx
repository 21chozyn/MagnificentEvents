import React from "react";
import "./index.scss";
import Loader from "react-loaders";

const index = () => {
  return (
    <div id="loading-container">
      <Loader type="ball-spin-fade-loader" />
      <h3>Loading...</h3>
    </div>
  );
};

export default index;
