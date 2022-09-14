import React from "react";
import Project from "./Project";
import projArr from "./Data";

function Home() {
  return (
    <div className="Home">
      <section className="description">
        <div className="bigImage"></div>
        <div className="bio">
          <h2 className="name">Description</h2>
          <p className="journey">
            A portfolio of solo and collaborative projects developed with
            various teams. The projects demonstrate a collection of front-end
            and back-end work in React and Node while incorporating other
            libraries and frameworks.
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
