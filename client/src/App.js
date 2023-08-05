import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MobileNav from "./Components/MobileNav/MobileNav";
import Layout from "./Components/Layout/Layout.js";

const App = () => {
  return (
    <>
      <div>
        <ToastContainer />
        <MobileNav />
        <Layout />
      </div>
    </>
  );
};

export default App;
