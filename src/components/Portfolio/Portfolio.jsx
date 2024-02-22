import React from "react";
import "./portfolio.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Slide, Zoom } from "react-awesome-reveal";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Portfolio = () => {
  return (


    <section className="portfolio1 section" id="portfolio1" >
      <div className="container ">
        <Slide direction="up">
          {" "}
          <h2 className="section__title">Portfolio</h2>
        </Slide>
        <Zoom>
          {" "}
          <span className="section__subtitle">
            My Projects and Freelance Work
          </span>
        </Zoom>
        <Swiper
          className="flex-container"
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            // When window width is <= 640px (mobile)

            450: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            // When window width is <= 768px (tablet)
            768: {
              slidesPerView: 2,
            },
            // When window width is <= 1024px (laptop)
            1024: {
              slidesPerView: 3,
            },
            // When window width is > 1024px (large screens)
            1440: {
              slidesPerView: 3,
            },
          }}
        >
          {/* Slides go here */}

          <SwiperSlide>
            <div className="project-card project-1">
              <p class="Project-title">
                {" "}
                <a id="link-styles" href="http://conquertravels.com/">
                  Conquer Tours & Travels
                </a>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-card project-2">
              <p class="Project-title">
                {" "}
                <a id="link-styles" href="http://conquertravels.com/">
                  Crewbyte Software Sloutions
                </a>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-card">
              <h4>Crew Spaces</h4>
              <br></br>
              Coming soon...
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-card project-comingSoon">
              {" "}
              <p class="Project-title-3 "> Coming Soon...</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-card project-comingSoon">
              {" "}
              <p class="Project-title-3"> Coming Soon...</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-card project-comingSoon">
              {" "}
              <p class="Project-title-3"> Coming Soon...</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-card project-comingSoon">
              {" "}
              <p class="Project-title-3"> Coming Soon...</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project-card project-comingSoon">
              {" "}
              <p class="Project-title-3"> Coming Soon...</p>
            </div>
          </SwiperSlide>
          <br></br>
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
