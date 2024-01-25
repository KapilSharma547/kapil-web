import React from "react";
import { skillIconsarr } from "../../utils/constanat";
import style from "./skills.module.css";
const SkillIcons = () => {
  return (
    <div className={style.skilliconsdiv} >
      {skillIconsarr.map((item, i) => (
        <img src={item} alt={i.toString()} key={i.toString()} />
      ))}
    </div>
  );
};

export default SkillIcons;
