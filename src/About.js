import React from "react";
import "./About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="about"
    >
      <h2 className="name">About</h2>
      <p className="about-content">
        These projects, which come from various stages of my education, showcase
        the technologies and tasks I have gained experience in. Through trial
        and error throughout these projects, I have come to value certain
        conventions. These conventions include clean and readable code, concise
        and descriptive commit messages, as well as overall organization and
        consistency in all aspects of development. Although these practices may
        require additional time upfront, I have witnessed how much time and
        headache they can save in the long run. As a result, I strive to follow
        best practices and constantly improve the quality of my code.
        <br></br>
        <br></br>
        One invaluable skill I have acquired is the ability to utilize resources
        such as Google to expand my knowledge of unfamiliar technologies. This
        skill enabled me to be independent and successful in my previous job,
        even though it involved using Typescript and Tailwind CSS, both of which
        I lacked experience with initially.
      </p>
    </motion.div>
  );
}

export default About;
