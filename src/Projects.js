import React from "react";
import projArr from "./Data";
import Project from "./Project";
import "./Projects.css";
import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="Projects"
    >
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
    </motion.div>
  );
}

export default Projects;
