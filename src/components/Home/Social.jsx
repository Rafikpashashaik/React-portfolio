import React from 'react'
import { Slide, Zoom } from "react-awesome-reveal";


const Social = () => {
  return (
    <div className="home__social">
       <Slide direction='left'> <a href="https://www.instagram.com/" className="home__social-icon">
        <i class="uil uil-instagram"></i>
        </a></Slide>
   
       <Slide direction='right'> <a href="https://www.linkedin.com/in/rafikpasha-shaik-59b080190/" className="home__social-icon" >
       <i className="bx bxl-linkedin uil "> </i>

        </a></Slide>

       <Slide direction='left'> <a href="" className="home__social-icon" target='_blank'>
        <i class="uil uil-github-alt" ></i>
        </a> </Slide>

        {/* <a href="" className="home__social-icon" target='_blank'></a> */}

    </div>

  )
}

export default Social