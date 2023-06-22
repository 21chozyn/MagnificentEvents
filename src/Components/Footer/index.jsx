import React from "react";
import "./index.scss";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { BsBoxArrowInUpRight } from "react-icons/bs";

const index = () => {
  return (
    <section className="footer">
      <h1>Have a project in mind?</h1>
      <div className="btn2">
        Get in touch
        <BsBoxArrowInUpRight />
      </div>
      <div className="div2">
        <div>
          <h2>Get in touch</h2>
          <p className="email">pmhondeh@gmail.com</p>
          <span> +263 773 907 228</span>
        </div>
        <div>
          <h4>Newsletter-signup</h4>
          <p className="signupTxt">
            Never miss a sale or promotion again! Sign up for our newsletter and
            be the first to know about our latest sales and promotions.
          </p>
          <input type="email" placeholder="Enter your email"></input>
        </div>
      </div>
      <div className="div3">
        <ul>
          <li>
            <Link
              to="https://www.facebook.com/magnificent50events"
              target="_blank"
            >
              <FaFacebookSquare />
            </Link>
          </li>
          <li>
            <Link
              to="https://www.instagram.com/magnificent_events_decor/"
              target="_blank"
            >
              <FaInstagram />
            </Link>
          </li>
        </ul>
        <h2>Magnificent Events Decor</h2>
        <span className="privacyPolicy">
          Privacy Policy | Terms and conditions
        </span>
      </div>
      <span className="copyright">&copy; Copyright 2023. All right reserved</span>
    </section>
  );
};

export default index;
