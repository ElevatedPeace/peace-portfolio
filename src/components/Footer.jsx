import "./Footer.css";
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaWhatsapp } from "react-icons/fa";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Nigeria</p>
            </div>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              08182443958
            </h4>
          </div>
          
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              peaceelekelife@gmail.com
            </h4>
          </div>


        </div>

        <div className="right">
            <h4>Accountability, Fast-Paced</h4>
            <p>Discusses new projects and design challenges</p>
            <div className="social">
                <a href="https://www.facebook.com/profile.php?id=100005617335998">
            <FaFacebook
                size={40}
                style={{ color: "#fff", marginRight: "1rem" }}
              /> 
              </a>

              <a href="https://www.linkedin.com/in/peace-eleke">
            <FaLinkedin
                size={40}
                style={{ color: "#fff", marginRight: "1rem" }}
              /> 
              </a>
              <a href="https://wa.me/2348182443958">
            <FaWhatsapp
                size={40}
                style={{ color: "#fff", marginRight: "1rem" }}
              /> 
              </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
