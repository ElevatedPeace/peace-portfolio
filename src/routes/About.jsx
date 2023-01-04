import React from 'react'
import AboutContent from '../components/AboutContent';
import Card from '../components/Card';
import Footer from '../components/Footer';
import HeroImage2 from '../components/HeroImage2';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div>
<Navbar />
<HeroImage2 heading="ABOUT" text="Designs dynamic and browser compatible pages using HTML, CSS, and JavaScript"/>
<AboutContent />
<Card />
<Footer />
    </div>
  )
}

export default About
