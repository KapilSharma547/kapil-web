import React from "react";
import { useTheme } from "../contaxt/ThemeContex";
import style from "./Home.module.css";
import Header from "../Assests/header-background.png";
import { Link } from "react-router-dom";
import About from "../components/About/About";
import Service from "../components/Service/Service";
const Home = () => {
  // const { theme, toggleTheme } = useTheme();
  // <button onClick={() => toggleTheme()}>handle</button>
  return (
    <>
      <div className={style.container}>
        <div className={style.imageContainer}>
          <img className={style.header_image} src={Header} alt="header" />
          <div className={style.overlayText}>
            <h1>I love to create beautiful and efficient websites</h1>
            <div className={style.connectdiv}>
              <button className={style.button}>Discover</button>
              <button className={style.link}>
                <Link>Contact</Link>
              </button>
            </div>
          </div>
        </div>
        {/* About Div */}
        <About />
        <Service />
      </div>
    </>
  );
};

export default Home;
