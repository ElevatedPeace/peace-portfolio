import "./Card.css"

import React from 'react'
import { Link } from "react-router-dom"

const Card = () => {
  return (
    <div className="card">
      <div className="container">
        <div className="card-card">
            <h3>Skills</h3>
            <span className="bar"></span>
            <p>ReactJs</p>
            <p>ChakraUI</p>
            <p>JavaScript</p>
            <p>Css</p>
            <p>Html</p>
            <p>Version Control/Git</p>
            <p>MaterialUI</p>
            <p>Testing/Debugging</p>

            <Link to="/contact" className="btnn">
             Find Out More
            </Link>
        </div>

        <div className="card-card">
            <h3>Services</h3>
            <span className="bar"></span>
            <p>Responsive Design</p>
            <p>Improved code and design</p>
            <p>Web Performance</p>
            <p>Catchy web contents</p>
            <p>Implementing websites, applications and landing pages from concept through deployment</p>
            <p>Maintaining, troubleshooting, and improving websites</p>

            <Link to="/contact" className="btnn">
             Find Out More
            </Link>
        </div>

        <div className="card-card">
            <h3>Strength</h3>
            <span className="bar"></span>
            <p>Problem Solving</p>
            <p>Team Working</p>
            <p>Communication Skills</p>
            <p>Time Management</p>
            <p>Active Listening</p>
            <p>Critical Thinking Skills</p>
            <p>Decision Making Skills</p>
            <p>Active Listening</p>

            <Link to="/contact" className="btnn">
             Find Out More
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
