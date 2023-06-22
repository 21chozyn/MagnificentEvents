import React from "react";
import { Link } from "react-router-dom";

import "./index.scss";
const index = () => {
  return (
    <div className="header">
      <h2>Magnificent Events Decor</h2>
      <div className="navs">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/portfolio"}>Portfolio</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </div>
      <button className="btn1">Contact us</button>
    </div>
  );
};

export default index;
