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
import Contact from "./pages/Contact/Contact.js";
import Tada from "react-reveal/Tada";
// import ScrollToTop from "react-scroll-to-top";

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
          <Contact />
        </div>
        <div className="footer pb-3 ms-3">
          <Tada>
            <h4 className="text-center">Made With 😍 Kapil &copy; 2023 </h4>
          </Tada>
        </div>
      </div>
      {/* <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      /> */}
    </>
  );
};

export default App;
