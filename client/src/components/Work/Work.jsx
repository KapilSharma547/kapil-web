import React from "react";
import style from "./work.module.css";
import Project from "./Project";
const Work = () => {
  return (
    <div className={style.container}>
      <h1>Developed projects</h1>
      <p>
        Listed below are some of the most representative projects I've worked
        on. They range from basic web design for presentation sites to advanced
        web development for online shops
      </p>
      <Project />
    </div>
  );
};

export default Work;
