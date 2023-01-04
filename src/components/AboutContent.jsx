import "./AboutContent.css";

import React from 'react'
import { Link } from "react-router-dom";
import img1 from "../Assests/imagesfrontend.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>About Me</h1>
        <p>
        Using knowledge of JavaScript, React and modern frontend technologies to improve the development of 
mobile and user-friendly applications, while contributing to a highly collaborative work environment, finding 
satisfaction and solutions to customers’ needs.
Self-driven, keen eye for details, and dedicated to creating stunning websites
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={img1} alt="img-img" className="img" />
          </div>

          <div className="img-stack bottom">
            <img src={img1} alt="img-img" className="img" />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default AboutContent
