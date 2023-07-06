import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import decor1 from "../../Images/decor1.jpg";
import CustomTextInput from "../CustomTextInput";

import { FcBusinessman, FcPhoneAndroid } from "react-icons/fc";
import { HiOutlineMailOpen } from "react-icons/hi";
import { CgCloseO } from "react-icons/cg";
import anime from "animejs";

const index = () => {
  const [data, setData] = useState({
    "First Name": "",
    "Last Name": "",
    Email: "",
    Phone: "",
  });
  const messageRef = useRef(null);
  const handleSend = () => {
    window.Email.send({
      Host: "smtp.elasticemail.com",
      Username: "panashemhondeh@gmail.com",
      Password: "4C6F004B4FB3675A0BBA9BEB5BEC6597884C",
      To: "21chozynyadigg@gmail.com",
      From: "panashemhondeh@gmail.com",
      Subject: data["Last Name"],
      Body: `Name: ${data["First Name"]} ${data["Last Name"]} 
      E-mail-Addrress: ${data.Email} 
      Phone Number:${data.Phone} 
      ${messageRef.current.value}`,
    })
      .then((message) =>
        alert("We have recieved your message. We will get back to you soon")
      )
      .then(handleCloseContactForm);
  };

  const handleData = (data) => {
    setData((prev) => {
      return { ...prev, [data.label]: data.inputValue };
    });
  };
  const handleCloseContactForm = () => {
    document.documentElement.style.overflow = "scroll"; //to make page scrollable
    anime({
      targets: "#contact-form",
      opacity: 0,
      easing: "easeInQuad",
      duration: 500,
      complete: function () {
        const element = document.getElementById("contact-form");
        element.style.display = "none";
        element.style.opacity = "1";
      },
    });
  };


  return (
    <div className="contact-form-container" id="contact-form">
      <CgCloseO onClick={handleCloseContactForm} />

      <div className="contact-form">
        <figure className="side-img">
          <img src={decor1}></img>
        </figure>
        <div className="form">
          <h2>Get in touch</h2>
          <p>24/7 We will answer you questions and answers</p>
          <div>
            <CustomTextInput
              label={"First Name"}
              icon={<FcBusinessman />}
              handleData={handleData}
            />
            <CustomTextInput
              label={"Last Name"}
              icon={<FcBusinessman />}
              handleData={handleData}
            />
          </div>
          <CustomTextInput
            label={"Email"}
            icon={<HiOutlineMailOpen />}
            handleData={handleData}
          />
          <CustomTextInput
            label={"Phone"}
            icon={<FcPhoneAndroid />}
            handleData={handleData}
          />

          <textarea
            ref={messageRef}
            rows={6}
            placeholder="Tell us about your event..."
          />
          <div className="btn2" onClick={handleSend}>
            <span>Submit</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
