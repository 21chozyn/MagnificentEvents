import React, {  useRef, useState } from "react";
import "./index.scss";
import useAnimateSlideOnIntersection from "../../Hooks/useAnimateOnIntersection";
//image imports
import wedding1 from "../../Images/wedding1.jpg";
import event1 from "../../Images/event1.jpg";
import catering1 from "../../Images/catering1.jpg";
import invitation1 from "../../Images/invitation1.jpg";
import cake1 from "../../Images/cake1.jpg";
import other1 from "../../Images/other1.jpg";
import birthday1 from "../../Images/birthday1.jpg";
import graduation1 from "../../Images/graduation1.jpg";
import anime from "animejs";
import useAnimateIntoView from "../../Hooks/useAnimateIntoView";

import { GiLovers } from "react-icons/gi";
import {
  HiOutlineCake,
  HiOutlineAcademicCap,
  HiDotsHorizontal,
} from "react-icons/hi";
const index = () => {
  //for image switch
  const [curPic1, setCurPic1] = useState(event1);
  const [curpic2, setCurPic2] = useState(wedding1);
  const [isSlided, setIsSlided] = useState(false);
  const handleClickToDo = (img) => {
    // this function handles the logic of switching and sliding the images
    setIsSlided((prev) => !prev);
    if (isSlided) {
      setCurPic2(img);
      anime({
        targets: ".img1",
        easing: "linear",

        translateX: 400,
        duration: 1000,
      });
      anime({
        targets: ".img2",
        easing: "linear",
        translateX: 0,
        duration: 1000,
      });
    } else {
      setCurPic1(img);
      anime({
        targets: ".img1",
        easing: "linear",
        translateX: 0,
        duration: 1000,
      });
      anime({
        targets: ".img2",
        easing: "linear",
        translateX: -400,
        duration: 1000,
      });
    }
  };

  const cateringRef = useRef(null);
  const invitationRef = useRef(null);
  const cakesRef = useRef(null);
  const hireEquipmentRef = useRef(null);
  const content1Ref = useRef(null);

  useAnimateSlideOnIntersection(cateringRef, false);
  useAnimateSlideOnIntersection(invitationRef, true);
  useAnimateSlideOnIntersection(cakesRef, false);
  useAnimateSlideOnIntersection(hireEquipmentRef, true);
  useAnimateIntoView(content1Ref);

  return (
    <div className="content-section">
      <section className="content1" ref={content1Ref}>
        <h1>Breathtaking designs to look forward to.</h1>
        <figure>
          <img className="weddingimg" src={wedding1} alt="" />
        </figure>
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
          At Magnificent Events Decor, we specialise in making your dream design
          a reality.
        </p>
        <ul>
          <li>
            <div onClick={() => handleClickToDo(wedding1)} className="textBtn">
              <p>Wedding</p>
              <GiLovers className="lovers-icon" />
            </div>
          </li>
          <li>
            <div onClick={() => handleClickToDo(birthday1)} className="textBtn">
              <p> Birthday Party</p>
              <HiOutlineCake className="cake-icon" />
            </div>
          </li>
          <li>
            <div
              onClick={() => handleClickToDo(graduation1)}
              className="textBtn"
            >
              <p>Graduation Party </p>
              <HiOutlineAcademicCap className="graduation-icon" />
            </div>
          </li>
          <li>
            <div onClick={() => handleClickToDo(event1)} className="textBtn">
              <p>Other</p>
              <HiDotsHorizontal className="other-icon" />
            </div>
          </li>
        </ul>
        <figure>
          <img className="img1" src={curPic1}></img>
          <img className="img2" src={curpic2}></img>
        </figure>
      </section>
      <section className="content3">
        <h2>Things to get along with Event Decoration</h2>
        <ul className="thingsList">
          <li className="catering" ref={cateringRef}>
            <span>Catering</span>
            <img src={catering1}></img>
          </li>
          <li className="invitation" ref={invitationRef}>
            <img
              src={invitation1}
              alt="This is a picture of an invitation card"
            ></img>

            <span>Invitation cards</span>
          </li>
          <li className="cake" ref={cakesRef}>
            <span>Cakes</span>
            <img src={cake1}></img>
          </li>
          <li className="higherEquipment" ref={hireEquipmentRef}>
            <img src={other1}></img>
            <span>Hire equipment</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default index;
