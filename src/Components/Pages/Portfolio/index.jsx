import React from "react";

import "./index.scss";
import flower1 from "../../../Images/flower1.jpg";
import { FaSearch } from "react-icons/fa";

const index = () => {
  return (
    <>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${flower1})` }}
      ></div>
      <div className="background-container">
        <h2>View our large collection of event pictures</h2>
        <div className="search-container">
            <select name="mode">
                <option value="picture">Picture</option>
                <option value="video">Video</option>
            </select>
          <input type="search" />
          <div className="searchBtn">
            <FaSearch />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
