import React from "react";
import style from "./work.module.css";
const Project = ({imgPath}) => {
  return (
    <div className={style.projectcontainer}>
      <h3 className={style.project_title}>Project Name</h3>
      <img src={imgPath} alt="Project1" className={style.project_images} />
      <p className={style.description}>
        I will only focus on one example on how you would set a specific
        flag/setting depending on the context of the command execution, that
        will be the loglevel flag.
      </p>
    </div>
  );
};

export default Project;
