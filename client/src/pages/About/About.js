import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import { Aboutme, aboutImage } from "../../constant";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src={aboutImage} alt="profile_pic" />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>{Aboutme}</p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
