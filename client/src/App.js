import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { ThemeProvider, useTheme } from "./contaxt/ThemeContex";
import style from "./app.module.css";
const App = () => {
  const { theme } = useTheme();
  return (
    <div
      className={style.container}
      style={{
        background: theme.bgColor,
        color: theme.fontColor,
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
