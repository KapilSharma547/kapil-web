import React from "react";
import style from "./service.module.css";
const SeviceCard = ({ image, title, description }) => {
  return (
    <div className={style.sevice}>
      <img className={style.serviceimg} src={image} alt="images" />
      <h1 className={style.title}>{title}</h1>
      <p lassName={style.desc}>{description} </p>
    </div>
  );
};

export default SeviceCard;
