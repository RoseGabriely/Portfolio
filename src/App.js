import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

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
          <p className="question">Like what you see?</p>
          <button className="contact">Contact Me</button>
        </footer>
      </section>
    </div>
  );
}

export default App;
