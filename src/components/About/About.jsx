import React from "react";
import AboutProfile from "../../ImagesAndAssets/MyPhoto.jpeg";
import "./about.css";
import Info from "./Info";
import CV from "../../ImagesAndAssets/Resume-Shaik Rafikpasha.pdf";
import { Slide, Zoom } from "react-awesome-reveal";

const About = () => {
  return (
    <section className="about section" id="about">
      <Slide direction="up">
        {" "}
        <h2 className="section__title">About Me</h2>
      </Slide>
      <Zoom>
        {" "}
        <span className="section__subtitle">My introduction</span>
      </Zoom>

      <div className="about__container container grid">
        <img src={AboutProfile} alt="" className="about__img"></img>

        <div className="about__data">
          <Info />

          <Zoom>
            {" "}
            <p className="about__description">
              I am a passionate and adaptable Full Stack Developer with a
              foundation in Front-End technologies and a growing proficiency in
              Back-End development. My journey in web development began with
              HTML, CSS, and JavaScript, expanding to include Bootstrap and
              React for user-friendly applications. Actively learning Node.js,
              SQL, and MongoDB, I aim to embrace the full spectrum of
              development. My goal is to craft seamless web solutions that
              exceed user expectations. Thriving on collaboration, I contribute
              to innovative projects, elevating user experiences and achieving
              business objectives. Committed to staying current with evolving
              technologies, I bring a dynamic and versatile approach to every
              project. Excited about the challenges and opportunities in Full
              Stack Development, I look forward to contributing my skills to
              create impactful, efficient, and engaging web solutions.
            </p>
          </Zoom>

          <Slide direction="up">
            {" "}
            <a download="" href={CV} className="button button--flex">
              Download CV <i class="uil uil-file-info-alt "></i>
            </a>
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default About;
