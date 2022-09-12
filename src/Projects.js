import React from "react";
import projArr from "./Data";
import Project from "./Project";

function Projects() {
  return (
    <div className="Projects">
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

export default Projects;
