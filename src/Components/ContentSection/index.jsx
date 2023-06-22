import React, { useRef, useState } from "react";
import "./index.scss";

//image imports
import wedding1 from "../../Images/wedding1.jpg";
import event1 from "../../Images/event1.jpg";
import catering1 from "../../Images/catering1.jpg";
import invitation1 from "../../Images/invitation1.jpg";
import cake1 from "../../Images/cake1.jpg";
import other1 from "../../Images/other1.jpg";
import birthday1 from "../../Images/birthday1.jpg";
import graduation1 from "../../Images/graduation1.jpg";
const index = () => {
  const [curPic, setCurPic] = useState(event1);
  const imageRef = useRef();
  const handleChangePic =(img)=>{
    
    setCurPic(img)
  }
  return (
    <div className="content-section">
      <section className="content1">
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
            <div onMouseEnter={()=>handleChangePic(wedding1)} className="textBtn">Wedding</div>
          </li>
          <li>
            <div onMouseEnter={()=>handleChangePic(birthday1)} className="textBtn">Birthday Party</div>
          </li>
          <li>
            <div onMouseEnter={()=>handleChangePic(graduation1)} className="textBtn">Graduation Party</div>
          </li>
          <li>
            <div onMouseEnter={()=>handleChangePic(wedding1)} className="textBtn">Wedding</div>
          </li>
        </ul>
          <figure>
            <img ref={imageRef} src={curPic}></img>
          </figure>
      </section>
      <section className="content3">
        <h2>Things to get along with Event Decoration</h2>
        <ul className="thingsList">
          <li>
            <span>Catering</span>
            <img src={catering1}></img>
          </li>
          <li>
            <img
              src={invitation1}
              alt="This is a picture of an invitation card"
            ></img>

            <span>Invitation cards</span>
          </li>
          <li>
            <span>Cakes</span>
            <img src={cake1}></img>
          </li>
          <li>
            <img src={other1}></img>
            <span>Hire equipment</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default index;
