import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./index.scss";

import { handleOpenContactForm } from "../HeroSection";
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
      <button className="btn1" onClick={handleOpenContactForm}>Contact us</button>
    </div>
  );
};

export default index;
