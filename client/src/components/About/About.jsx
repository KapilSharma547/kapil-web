import React from "react";
import style from "./about.module.css";
import Education from "./Education/Education";
import { education } from "./education";
const About = () => {
  return (
    <section className={style.container}>
      <div className={style.name}>
        <h2>Hi there I'm Kapil,</h2>
        <p>
          And I love to create beautiful and efficient websites for my
          customers. I love going through the entire process with the customer
          from concept, to design and then development and launch
        </p>
      </div>
      <div className={style.education}>
        {education?.slice(0, 2).map((item) => (
          <Education
            title_start={item.title_start}
            title_end={item.title_end}
            description={item.description}
            heading={item.heading}
          />
        ))}
      </div>
      <div className={style.education}>
        {education?.slice(2).map((item) => (
          <Education
            title_start={item.title_start}
            title_end={item.title_end}
            description={item.description}
            heading={item.heading}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
