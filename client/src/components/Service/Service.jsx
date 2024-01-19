import React from "react";
import style from "./service.module.css";
import SeviceCard from "./SeviceCard";
import { Serviceitem } from "../../constanat";
const Service = () => {
  return (
    <div className={style.container}>
      <h1>Offered services</h1>
      <p className={style.description}>
        Web design and development have been my bread and butter for more than 5
        years. During that time I've discovered that I can help startups and
        companies with the following services
      </p>
      <div className={style.card_div}>
        {Serviceitem.map((item) => (
          <SeviceCard
            image={item.image}
            title={item.title}
            description={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Service;
