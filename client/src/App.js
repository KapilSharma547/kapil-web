import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MobileNav from "./Components/MobileNav/MobileNav";
import Layout from "./Components/Layout/Layout.js";
import About from "./pages/About/About.js";
import { useTheme } from "./context/ThemeContext";
import Education from "./pages/Educations/Education.js";
import Techstack from "./pages/Techstack/Techstack.js";
import Projects from "./pages/Projects/Projects.js";
import WorkExp from "./pages/workExp/WorkExp.js";

const App = () => {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Projects />
          <WorkExp />
        </div>
      </div>
    </>
  );
};

export default App;
