import React from "react";
import style from "./work.module.css";
import Project from "./Project";
import { Project1, Project2, Project3 } from "../../utils/ImagesConstant";
const Work = () => {
  return (
    <div className={style.container}>
      <h1>Developed projects</h1>
      <p>
        Listed below are some of the most representative projects I've worked
        on. They range from basic web design for presentation sites to advanced
        web development for online shops
      </p>
      <div className={style.project_div}>
        <Project imgPath={Project1} />
        <Project imgPath={Project2} />
        <Project imgPath={Project3} />
      </div>
    </div>
  );
};

export default Work;
