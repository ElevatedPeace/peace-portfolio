import "./HeroImage.css";
import IntroImg from "../Assests/laptop.jpg";
import React from 'react'
import {Link} from "react-router-dom"

const HeroImage = () => {
  return (
    <div className="hero">
        <div className="mask">
           <img className="intro-img" 
           src={IntroImg} alt="IntroImage" />
        </div>

        <div className="content">
        <h1> Frontend Developer</h1>
                    <p> Seasoned and independent Front End Developer with experience in blending the art of design with skill of programming to deliver an immersive and engaging user experience through efficient website development, proactive feature optimization, and relentless debugging.
      Very passionate about aesthetics.</p>

      
        <div>
            <Link to="/project" className="btn">
             Projects 
             </Link>

            <Link to="/contact" className="btn btn-light">
             Contact 
            </Link>

            </div>
        </div>
      
    </div>
  );
};

export default HeroImage;
