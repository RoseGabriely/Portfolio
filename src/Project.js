import React from "react";

const Project = (props) => {
  return (
    <div className="galleryItem">
      <div className="image">
        <a href={props.link} target="_blank" rel="noreferrer">
          <img src={props.image} alt="project" />
        </a>
      </div>
      <p className="caption">{props.caption}</p>
    </div>
  );
};

export default Project;
