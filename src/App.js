import "./App.css";
import React from "react";
import Project from "./project";

const projArr = [
  {
    key: 1,
    image: "https://i.ibb.co/whjN8Ks/download.png",
    link: "https://github.com/RoseGabriely/unit4buildweek",
    caption:
      "An API for an African Marketplace website where business owners could list products at various market locations",
  },
  {
    key: 2,
    image: "https://i.ibb.co/9Tr6Vt1/download.png",
    link: "https://github.com/RoseGabriely/coder-heroes-fe",
    caption:
      "Front-end of coderheroes, a booking website for parents to sign their young kids up for coding courses.",
  },
  {
    key: 3,
    image: "https://i.ibb.co/9Tr6Vt1/download.png",
    link: "https://github.com/RoseGabriely/coder-heroes-be",
    caption:
      "Back-end of coderheroes, a booking website for parents to sign their young kids up for coding courses.",
  },
  {
    key: 4,
    image: "https://i.ibb.co/RpYzLV6/download.png",
    link: "https://github.com/Build-Week-Water-My-Plantz/front-end",
    caption:
      "Front-end work on a website to keep track of plants, their information, and their watering schedules.",
  },
];

function App() {
  return (
    <div className="App">
      <section className="title">Rose's Portfolio</section>
      <header>
        <h1>Rose Gabriely</h1>
        <nav>
          <a href="index.html">Home</a>
          <a href="about.html">About</a>
          <a href="contact.html">Contact</a>
          <a href="projects.html">Projects</a>
        </nav>
      </header>
      <section className="page">
        <section className="about">
          <div className="bigImage"></div>
          <div className="bio">
            <h2 className="name">About</h2>
            <p className="journey">
              This is a portfolio of my solo projects, along with projects I
              worked on with various teams during my schooling. They include
              front-end, back-end and full-stack work in React and Node which
              also incorporate other libraries and frameworks.
            </p>
          </div>
        </section>
        <div className="gallery">
          {projArr.map((project) => {
            return (
              <Project
                key={project.key}
                image={project.image}
                link={project.link}
                caption={project.caption}
              />
            );
          })}
        </div>
        <footer>
          <p className="question">Like what you see?</p>
          <button className="contact">Contact Me</button>
        </footer>
      </section>
    </div>
  );
}

export default App;
