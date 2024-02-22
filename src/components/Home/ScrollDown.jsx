import React from "react";
import { Slide } from "react-awesome-reveal";

const ScrollDown = () => {
  return (
     <div className="Home__scroll">
     <Slide direction="up"> <a href="about" className="home__scroll-button button--flex">
        <div className="mouse-body">
          <div className="mouse-scroll-button"></div>
        </div>
        <span className="home__scroll-name">Scroll down</span>
        <i class="uil uil-arrow-down home__scroll-arrow"></i>
      </a> </Slide>
    </div>
  );
};

export default ScrollDown;
