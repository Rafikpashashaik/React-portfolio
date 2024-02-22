import React from "react";
import { Slide } from "react-awesome-reveal";

const Frontend = () => {
  return (
    <Slide direction="left" >  <div className="skills__content">
      <h3 className="skills__title"> Frontend developer </h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div className="">
              <h3 className="skills__name"> HTML </h3>
              <span className="skills__level"> Advanced </span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div className="">
              <h3 className="skills__name"> CSS </h3>
              <span className="skills__level"> Advanced  </span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div className="">
              <h3 className="skills__name">Bootstrap </h3>
              <span className="skills__level"> Advanced </span>
            </div>
          </div>
        </div>


        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div className="">
              <h3 className="skills__name"> Javascript </h3>
              <span className="skills__level"> Good </span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"> </i>

            <div className="">
              <h3 className="skills__name"> Reactjs</h3>
              <span className="skills__level"> Intermediate </span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div className="">
              <h3 className="skills__name"> Git </h3>
              <span className="skills__level"> Intermediate </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Slide>
  );
};

export default Frontend;
