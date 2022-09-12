import React from "react";
import Project from "./Project";
import projArr from "./Data";

function Home() {
  return (
    <div className="Home">
      <section className="about">
        <div className="bigImage"></div>
        <div className="bio">
          <h2 className="name">About</h2>
          <p className="journey">
            A portfolio of solo and collaborative projects worked on with
            various teams. Demonstrate front-end, back-end and full-stack work
            in React and Node while also incorporating other libraries and
            frameworks.
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
    </div>
  );
}

export default Home;
