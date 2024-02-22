import React from "react";
import { Slide,Zoom  } from "react-awesome-reveal";

const Data = () => {
  return (
    <div className="home__data">
     <Slide direction="up"><h1 className="home__title">
        Rafik Pasha Sheik
        <span class="waving-hand">👋</span>
      </h1></Slide> 
      <Slide direction="up"><h3 className="home__subtitle">Full-Stack Developer</h3></Slide>  
   <Zoom>  <p className="home__description">
   As a dedicated Full Stack Developer, I am driven to leverage my expertise in Front-End technologies such as HTML, CSS, JavaScript, Bootstrap, and React, alongside my ongoing journey in learning Node.js, SQL, and MongoDB for Back-End development. My career objective is to architect seamless web solutions that intricately blend design and functionality, ensuring optimal user experiences and driving business success. Committed to continuous learning, I aim to embrace diverse challenges and contribute to innovative projects, solidifying my position as a versatile and accomplished Full Stack Developer.
      </p></Zoom>
     <Slide direction="up"> <a href="#contact" className=" button button--flex">
        Say Hello
        <i class="uil uil-message button__icon"></i>
      </a></Slide>
    </div>
  );
};

export default Data;
