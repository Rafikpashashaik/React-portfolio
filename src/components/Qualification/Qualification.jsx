import React, { useState } from "react";
import "./qualification.css";
import { Slide, Zoom } from "react-awesome-reveal";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const [showNewText, setShowNewText] = useState(false);

  const toggleTab = (index) => {
    setToggleState(index);
    setShowNewText(index === 2); // Show new text if Experience tab is clicked
  };

  return (
    <section className="qualification section">
     <Slide direction="up"><h2 className="section__title">Qualification</h2></Slide> 
      <Zoom><span className="section__subtitle">My personal journey</span></Zoom>

      <div className="qualification_container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"> </i>{" "}
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button__flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
            style={{ display: toggleState === 1 ? "block" : "none" }}
          >
            {/* ---this is 1 */}

            <div className="qualification__data">
              <Slide direction="left">
                {" "}
                <div className="">
                  <h3 className="qualification__title"> B.Tech </h3>

                  <span className="qualification__subtitle">
                    St.Mary's Engineering College
                  </span>
                  <span className="qualification__subtitle">
                    Mechanical Engineering
                  </span>

                  <div className="qualification__calender">
                    <i class="uil uil-calendar-alt  qualification__icon "></i>
                    2018 - 2022
                  </div>
                </div>
              </Slide>
              <div className="">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div> </div>

              <div className="">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <Slide direction="right">
                {" "}
                <div className="">
                  <h3 className="qualification__title"> Diploma </h3>
                  <span className="qualification__subtitle">
                    Mechanical Engineering
                  </span>
                  <span className="qualification__subtitle">
                    Government Polytechnic College
                  </span>

                  <div className="qualification__calender">
                    <i class="uil uil-calendar-alt  qualification__icon "></i>
                    2020 - 2021
                  </div>
                </div>
              </Slide>
            </div>
            <div className="qualification__data">
              <Slide direction="left">
                <div className="">
                  <h3 className="qualification__title"> High School </h3>

                  <span className="qualification__subtitle">
                    Fatima High School
                  </span>
                  <span className="qualification__subtitle">2013-2014</span>

                  <div className="qualification__calender">
                    <i class="uil uil-calendar-alt  qualification__icon "></i>
                    2021 - present
                  </div>
                </div>
              </Slide>

              <div className="">
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>

        {showNewText && <span className="section__subtitle">Fresher </span>}
      </div>
    </section>
  );
};

export default Qualification;
