import React from "react";
import { Slide } from "react-awesome-reveal";

const Backend = () => {
  return (
    <Slide direction="right">
      {" "}
      <div className="skills__content">
        <h3 className="skills__title"> Backend developer </h3>

        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <i class="bx bx-badge-check"></i>

              <div className="">
                <h3 className="skills__name"> Nodejs </h3>
                <span className="skills__level"> Intermediate </span>
              </div>
            </div>

            <div className="skills__data">
              <i class="bx bx-badge-check"> </i>

              <div className="">
                <h3 className="skills__name">Core Java </h3>
                <span className="skills__level"> Intermediate</span>
              </div>
            </div>

            <div className="skills__data">
              <i class="bx bx-badge-check"></i>

              <div className="">
                <h3 className="skills__name"> Spring Boot</h3>
                <span className="skills__level"> Beginner </span>
              </div>
            </div>
          </div>

          <div className="skills__group">
            <div className="skills__data">
              <i class="bx bx-badge-check"> </i>

              <div className="">
                <h3 className="skills__name"> MongoDB </h3>
                <span className="skills__level"> Intermediate </span>
              </div>
            </div>

            <div className="skills__data">
              <i class="bx bx-badge-check"></i>

              <div className="">
                <h3 className="skills__name"> SQL</h3>
                <span className="skills__level"> Beginner </span>
              </div>
            </div>
            {/* 
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div className="">
              <h3 className="skills__name"> </h3>
              <span className="skills__level"> </span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div className="">
              <h3 className="skills__name"> </h3>
              <span className="skills__level"> </span>
            </div>
            
          </div> */}
          </div>
        </div>
      </div>{" "}
    </Slide>
  );
};

export default Backend;
