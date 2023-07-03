import React from "react";
import "./index.scss";
import colleagues from "../../../Images/colleagues.jpg";
import ChoiceCard from "../../ChoiceCard";

import { FcApproval, FcAssistant, FcIdea,FcCallback } from "react-icons/fc";
const index = () => {
  return (
    <>
      <section className="about-section section1">
        <h1>About us</h1>
        <p className="short-abt-txt">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's s
        </p>
        <div className="about-us">
          <figure>
            <img src={colleagues}></img>
          </figure>
          <div className="abt-txt-container">
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              <br />
              <br />
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
            <div className="btn2">Contact us</div>
          </div>
        </div>
      </section>
      <section className="about-section section2">
        <h1>Why choose us</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's s
        </p>
        <div className="choices-container">
          <ChoiceCard
            icon={<FcApproval />}
            reasonText={
              "we have extensive experience in decorating various events which include but not limited to weddings and birthdays "
            }
            reason={"Expertise"}
          />
          <ChoiceCard
            icon={<FcIdea />}
            reason={"Attention to detail"}
            reasonText={
              "We take pride in our work, and i pay close attention to every detail to ensure that the end product is of the highest quality."
            }
          />
          <ChoiceCard
            icon={<FcCallback />}
            reason={"Communication"}
            reasonText={
              "We believe that clear and constant communication is crucial for the success of any project."
            }
          />
          <ChoiceCard
            icon={<FcAssistant />}
            reason={"Customer Service"}
            reasonText={
              "As a Events Decor Management team, we understand the importance of building long-term relationships with our clients."
            }
          />
        </div>
      </section>
    </>
  );
};

export default index;
