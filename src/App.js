import React from "react";
import "./index.css"
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path ="/" element={<Home />} />
      <Route path ="/project" element={<Project />} />
      <Route path ="/about" element={<About />} />
      <Route path ="/contact" element={<Contact />} />
    </Routes>
    <a
        href="https://wa.me/2348182443958"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </>
  );
}

export default App;
