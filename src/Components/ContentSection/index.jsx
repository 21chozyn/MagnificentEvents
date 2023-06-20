import React from "react";
import wedding1 from "../../Images/wedding1.jpg";
import "./index.scss";
import event1 from "../../Images/event1.jpg";
import catering1 from "../../Images/catering1.jpg";
const index = () => {
  return (
    <div className="content-section">
      <section className="content1">
        <h1>Breathtaking designs to look forward to.</h1>
        <img className="weddingimg" src={wedding1} alt="" />
        <div>
          <div>
            <h2>Design faster than ever</h2>
            Our team of experts work quickly and efficiently to help you reach
            your dream design faster.
          </div>
          <div>
            <h2>The best company on the market</h2>
            We are a blooming business who leaves all clients satisfied.
          </div>
          <div>
            <h2>Easily communicate with us</h2>
            We are flexible and can meet any deadline.
          </div>
        </div>
      </section>
      <section className="content2">
        <h1>What do you want us to decorate?</h1>
        <p>
          {" "}
          At Magnificent Events Decor, we specialise in making your dream design
          a reality.
        </p>
        <ul>
          <li>
            <div className="textBtn">Wedding</div>
          </li>
          <li>
            <div className="textBtn">Birthday Party</div>
          </li>
          <li>
            <div className="textBtn">Graduation Party</div>
          </li>
          <li>
            <div className="textBtn">Wedding</div>
          </li>
        </ul>
        <div>
          <img src={event1}></img>
        </div>
      </section>
      <section className="content3">
        <h2>Things to get along with Event Decoration</h2>
        <ul className="thingsList">
          <li>
            <span>Catering</span>
            <img src={catering1}></img>
          </li>
          <li>
            <img src={catering1}></img>

            <span>Catering</span>
          </li>
          <li>
            <span>Catering</span>
            <img src={catering1}></img>
          </li>
          <li>
            <img src={catering1}></img>
            <span>Catering</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default index;
