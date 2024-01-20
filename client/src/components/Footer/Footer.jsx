import React from "react";
import style from "./footer.module.css";
import { FaGithub, FaFileDownload } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import ExamplePdf from "../../Assests/Kapil's Resume.pdf";
const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.social_div}>
        <a
          href={"https://www.linkedin.com/in/kapil-sharma-091790213/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className={style.social_images} />
        </a>
        <a
          href={"https://github.com/KapilSharma547"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className={style.social_images} />
        </a>
        <a
          href={ExamplePdf}
          download="Example-PDF-document"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFileDownload className={style.social_images} />
        </a>
      </div>
      <p>Copyright © 2024 Kapil Sharma</p>
    </div>
  );
};

export default Footer;
