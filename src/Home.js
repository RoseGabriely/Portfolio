import React from "react";
import Project from "./Project";
import projArr from "./Data";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="Home"
    >
      <section className="description">
        <div className="bio">
          <h2 className="name">Description</h2>
          <p className="summary">
            A portfolio containing individual and team-based projects which
            highlight both front-end and back-end development skills using React
            and Node, as well as other relevant libraries, frameworks and
            technologies.
          </p>
        </div>
        <div className="skills">
          <img
            src="https://img.icons8.com/?size=512&id=108784&format=png"
            alt="javascript logo"
          />

          <img
            src="https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png"
            alt="nodejs logo"
          />

          <img
            src="https://img.icons8.com/?size=512&id=123603&format=png"
            alt="react logo"
          />

          <img
            src="https://img.icons8.com/?size=512&id=jD-fJzVguBmw&format=png"
            alt="redux logo"
          />
        </div>
      </section>
      <div className="gallery">
        {projArr.map((project) => {
          return (
            <Project
              key={project.key}
              image={project.image}
              link={project.link}
              title={project.title}
              caption={project.caption}
            />
          );
        })}
      </div>
    </motion.div>
  );
}

export default Home;
