import React from "react";
import "./footer.css";
import { Slide, Zoom } from "react-awesome-reveal";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title"> Rafi shaik </h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#project" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <Slide direction="up" delay={300}>
            {" "}
            <a href="https://www.instagram.com/" className="footer__social-icon" target="_blank">
              <i class="uil uil-instagram"></i>
            </a>
          </Slide>

          <Slide direction="up" delay={600}>
            {" "}
            <a
              href="https://www.linkedin.com/in/rafikpasha-shaik-59b080190/"
              className="footer__social-icon"
              
            >
              <i class="uil uil-dribbble"></i>
            </a>
          </Slide>

          <Slide direction="up" delay={900}>
            {" "}
            <a href="" className="footer__social-icon" target="_blank">
              <i class="uil uil-github-alt"></i>
            </a>
          </Slide>
        </div>

        <span className="footer__copy">
          {" "}
          &#169; Sheik.Rafikpasha. All rights resrved{" "}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
