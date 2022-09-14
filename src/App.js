import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <section className="title">Rose's Portfolio</section>
      <header>
        <h1>Rose Gabriely</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/projects">Projects</Link>
        </nav>
      </header>
      <section className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
        <footer>
          <p className="question">Contact me!</p>
          <div className="contact">
            <a
              href="mailto: rosegabriely14@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaEnvelope />
            </a>
            <a href="tel:8577070062">
              <FaPhone />
            </a>
            <a
              href="https://www.linkedin.com/in/rosegabriely/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/RoseGabriely"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default App;
