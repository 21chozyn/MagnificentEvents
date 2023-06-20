import React from "react";
import "./index.scss";

//Component imports
import SvgBalloons from "../SvgBalloons";
import SvgDecor from "../SvgDecor";
// resource imports
import heroImg1 from "../../Images/herosection1.jpg";
import balloonsImg from "../../Images/Balloons.jpg";

const index = () => {
  return (
    <>
      <div className="hero-section">
        <div className="balloons">
          <SvgBalloons />
        </div>
        <section className="section1">
          <img src={heroImg1} />
          <div>
            <h1>
              Events
              <SvgDecor /> in a modern way
            </h1>
            <p>
              Welcome to our decor business! We specialize in decorating events
              such as shows, weddings, birthday parties, graduations and more.
              Our team of experts is dedicated to making your event
              unforgettable by creating a unique and personalized atmosphere
              that reflects your style and vision. We offer a wide range of
              services including event design, floral arrangements, lighting
              design, and more. Our team works closely with you to understand
              your needs and preferences to create a customized plan that fits
              your budget. At our decor business, we believe that every event is
              unique and deserves a special touch. That’s why we take the time
              to get to know you and your vision so that we can create an
              unforgettable experience for you and your guests. If you’re
              looking for a decor business that can help you create an
              unforgettable event, look no further! Contact us today to learn
              more about our services.
            </p>
            <div className="btn2">Get in touch</div>
          </div>
        </section>
        <section className="section2">
          <div>
            <h2>100+</h2>
            Clients nationally
          </div>
          <div>
            <h2>5</h2>
            Years of Experience
          </div>
          <div>
            <h2>1000+</h2>
            Events Decorated
          </div>
        </section>
      </div>
    </>
  );
};

export default index;
