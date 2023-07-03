import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./index.scss";
const index = () => {
  const location = useLocation();
  return (
    <div className="header">
      <h2>Magnificent Events Decor</h2>
      <div className="navs">
        <ul>
          <li>
            <Link
              style={{ color: location.pathname === "/" && "white" }}
              to={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              style={{ color: location.pathname === "/portfolio" && "white" }}
              to={"/portfolio"}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              style={{ color: location.pathname === "/about" && "white" }}
              to={"/about"}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
      <button className="btn1">Contact us</button>
    </div>
  );
};

export default index;
