import React from 'react';
import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';
import Work from "../components/Work";
import Navbar from '../components/Navbar';



const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImage />
      <Work />
      <Footer />
    </div>
  )
}

export default Home
