import React from "react";
import style from "./About.module.css";
import AboutComponent from "../components/About/About"; //We Can import like this
import Skillls from "../components/Skills/Skillls";
import Work from "../components/Work/Work";

const About = () => {
  return (
    <div className={style.container}>
      <AboutComponent />
      <Skillls />
      <Work />
    </div>
  );
};

export default About;
