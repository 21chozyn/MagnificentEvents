import React from "react";
import "./index.scss";

//Component imports
import SvgBalloons from "../SvgBalloons";
// resource imports
import heroImg1 from "../../Images/herosection1.jpg";
import balloonsImg from "../../Images/Balloons.jpg";

const index = () => {
  return (
    <div className="hero-section">
      <div className="balloons">
        <SvgBalloons />
      </div>
      <div className="div1">
        <img src={heroImg1} />
        <div>
          <h1>Events decoration in a modern way</h1>
          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <div className="btn2">Get in touch</div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default index;
