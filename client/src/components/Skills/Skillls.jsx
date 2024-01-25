import React from "react";
import style from "./skills.module.css";
import { skillbackground } from "../../utils/ImagesConstant";
import SkillIcons from "./SkillIcons";
const Skillls = () => {
  return (
    <div className={style.parantdiv}>
      <div className={style.image_div}>
        <img src={skillbackground} />
      </div>
      <div className={style.contant_div}>
        <h1>Why Work With Me</h1>
        <p>
          I am a great communicator and love to invest the necessary time to
          understand the customer's problem very well
        </p>
        <h2>DEVELOPMENT TOOLS</h2>
        <p>
          My favorite development tools are React and Node but I can also do
          development in Next.js, TypeScript and Express too
        </p>
        <p>
          I am familiar and work on a daily basis with HTML, CSS, JavaScript,
          Bootstrap and other modern frameworks
        </p>
        <SkillIcons />
      </div>
    </div>
  );
};

export default Skillls;
