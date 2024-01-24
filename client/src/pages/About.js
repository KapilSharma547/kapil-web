import React from "react";
import style from "./About.module.css";
import AboutComponent from "../components/About/About"; //We Can import like this

const About = () => {
  return (
    <div className={style.container}>
      <AboutComponent /> 
      
    </div>
  );
};

export default About;
