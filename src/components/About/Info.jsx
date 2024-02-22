import React from "react";
import { Slide, Zoom } from "react-awesome-reveal";

const Info = () => {
  return (
    <div className="about__info grid">
      <Slide direction="up">
        <div className="about__box">
          {/* <i class="uil uil-award"></i> */}
          <i class="uil uil-award-alt about__icon"></i>

          <h3 className="about__title"> Experience </h3>

          <span className="about__subtitle">Fresher</span>
        </div>{" "}
      </Slide>

      <Slide direction="up" delay={200}>
        {" "}
        <div className="about__box">
          <i class="uil uil-briefcase-alt about__icon"></i>
          <h3 className="about__title"> Completed </h3>
          <span className="about__subtitle">5 + projects</span>
        </div>{" "}
      </Slide>

      <Slide direction="up"delay={400}>
        {" "}
        <div className="about__box">
          <img
            id="support-icon"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAiBJREFUSEvt1k+oTXEQwPHPIxspspEVCSEWlBCirJQ/ycKOQomFhEIST/5FSMKGYmchkj8rWSlhISJF/pR/WVAWUqQ0t999Hce599x37nvdkqlT95wzM98zc2fmN106JF0d4uoteCBmYjRGpo/+gNe4j1+tBtIqeBx2YBmGNXD+GVdwEK/KPqAMPBiHsAERbSvyA0ewF/G7UJqBI53XMDljeRvXcQcv0vPxmIvFmJfRjdQvwaciciPwxOR8eDK6ha14VBLyNJzAnKT3HrPwNm9XBB6BexiVlLfhcCs5TjoDsB/b0/2TVJDfsj6KwBexIiltShH0gtujGv/xrnQXWQhfPZIHT8Cz9PYGFlUhJpvwfRczUpFFzXys+8uDL2AlfmIM3rUBDtMpeJx8HMDOIvAgfMEQnMPaNqF185tYmLogOqAm2YgXIKo3ZDku9xF4Dc4mXwGutWEWvArnk8IpPEek/mvFDxiK8DkJ65KP6PWYA3+Ao09j4mQlJtaZiuD1OJ2z3YiTefAe7M4pdiOeV5Gm/rKp/g+O9P7bqd6Mo/1cXME4nq/q2DKeIiZYXdppp3yxfk9ne207yc/qqViaqDE+2xkgMZtjXYo9bB8uIY7ImpStPkX9G6dMXFl5g7iyElvKbLzE2LyjKuCyfg9IRLo6wY5hS3+BG022OBCmF837voq4CPwgnXJ/7VtV/+P5iKuZXMXDZgpVIi5htva6Y+DfchZyH/UVlr4AAAAASUVORK5CYII="
          />
          <h3 className="about__title"> Support </h3>
          <span className="about__subtitle">Online 24/7</span>
        </div>{" "}
      </Slide>
    </div>
  );
};

export default Info;
