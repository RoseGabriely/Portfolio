import React from "react";
import "./Projects.css";

const Project = (props) => {
  return (
    <div className="galleryItem">
      <div className="image">
        <a href={props.link} target="_blank" rel="noreferrer">
          <img src={props.image} alt="project" />
          <div className="hoverContent">
            <h3>{props.title}</h3>
            <p className="caption">{props.caption}</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Project;
