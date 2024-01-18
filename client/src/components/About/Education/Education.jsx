import React from "react";
import style from "./education.module.css";

const Education = ({ title_start, title_end, description, heading }) => {
  return (
    <div className={style.container}>
      <p className={style.title}>{`${title_start} - ${title_end}`}</p>
      <p className={style.heading}>{heading}</p>
      <p className={style.description}>{description}</p>
    </div>
  );
};

export default Education;
