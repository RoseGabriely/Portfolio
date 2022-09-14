import React from "react";
import "./About.css";

function About() {
  return (
    <div className="About">
      <h2 className="name">About</h2>
      <p className="about">
        These projects are from various stages of my education. They showcase
        technologies and tasks I've gained experience in. Through trial and
        error throughout these projects, I've come to value certain conventions.
        These include clean and readable code, commit messages that are
        descriptive and concise, appropriately sized pull requests, along with
        overall organization and consistency in all aspects of development.
        Although these things may take extra time upfront, I've seen how much
        time and headache they can save in the long run. Because of this, I
        strive to follow best practices and constantly improve the quality of my
        code. A skill that has proven invaluable is the ability to harness
        google to assist with blockers or unfamiliar technologies. This skill
        enabled me to be independent and successful at my previous job, despite
        its use of Typescript and Tailwind CSS, both of which I lacked
        experience with going into the job.
      </p>
    </div>
  );
}

export default About;
