import React from "react";
import "./Projects.css";

function Projects(props) {
  return (
    <div className="Project">
      <div>
        <div>
          <a href="http://localhost:3000/dashboard">
            <img classname="ProjectImg" src={props.image} alt="Placeholder" />
          </a>
        </div>
        <div>
          <a href="http://localhost:3000/dashboard">
            <h1 className="ProjectHeading">{props.subject}</h1>

            <p className="ProjectSubheading">
              {props.course} | {props.activity}
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
