import React from "react";
import "./Projects.css";

function Projects(props) {
  return (
    <div className="Project">
      <div>
        <div>
          <img classname="ProjectImg" src={props.image} alt="Placeholder" />
        </div>
        <div>
          <h1 className="ProjectHeading">{props.subject}</h1>

          <p className="ProjectSubheading">
            {props.course} | {props.activity}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
