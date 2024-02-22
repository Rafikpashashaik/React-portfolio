import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import { Slide, Zoom } from "react-awesome-reveal";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
    <Slide direction="up">  <h2 className="section__title">Skills</h2> </Slide>
      <Zoom>   <span className="section__subtitle">My technical level</span> </Zoom>

      <div className="skills__container container grid">
        <Frontend />

        <Backend />
      </div>
    </section>
  );
};

export default Skills;
