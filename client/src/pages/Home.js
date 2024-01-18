import React from "react";
import { useTheme } from "../contaxt/ThemeContex";
import style from "./Home.module.css";
const Home = () => {
  // const { theme, toggleTheme } = useTheme();
  // <button onClick={() => toggleTheme()}>handle</button>
  return (
    <>
      <div className={style.container}>Home Page</div>
    </>
  );
};

export default Home;
