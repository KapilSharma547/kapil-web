import React from "react";
import style from "./navbar.module.css";
import man from "../../Assests/man.png";
import { Link } from "react-router-dom";
import { links } from "./link";
const Navbar = () => {
  return (
    <div className={style.conatiner}>
      <div className={style.logo}>
        <Link to={"/"}>
          <img className={style.img} src={man} alt="user_img" />
        </Link>
      </div>
      <div className={style.links}>
        {links.map((item) => (
          <Link to={item.path} key={item.path} className={style.link}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
