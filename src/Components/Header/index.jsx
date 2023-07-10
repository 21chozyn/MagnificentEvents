import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./index.scss";

import { handleOpenContactForm } from "../HeroSection";

import LoadingComponent from "../LoadingComponent";
import anime from "animejs";

const index = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, []);
  useEffect(() => {
    let interval;
    isLoading &&
      (interval = setInterval(() => {
        anime({
          targets: "#loading-container",
          opacity: 0,
          easing: "easeInQuad",
          duration: 500,
          complete: function () {
            setIsLoading(false);
          },
        });
      }, 2000));
    return () => {
      clearInterval(interval);
    };
  }, [isLoading]);
  return (
    <div className="header">
      {isLoading && <LoadingComponent />}
      <h2>Magnificent Events Decor</h2>
      <div className="navs">
        <ul>
          <li>
            <Link
              onClick={() => setIsLoading(true)}
              style={{ color: location.pathname === "/" && "white" }}
              to={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsLoading(true)}
              style={{ color: location.pathname === "/portfolio" && "white" }}
              to={"/portfolio"}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setIsLoading(true)}
              style={{ color: location.pathname === "/about" && "white" }}
              to={"/about"}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
      <button className="btn1" onClick={handleOpenContactForm}>
        Contact us
      </button>
    </div>
  );
};

export default index;
