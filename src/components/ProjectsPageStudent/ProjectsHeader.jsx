import React from "react";
import "./ProjectsHeader.css";

function ProjectsHeader() {
  return (
    <div>
      <div className="ProjectsHeader">
        <h1>PROJECTS</h1>
      </div>
      <div>
        <h2 className="ProjectsSubheading">
          Welcome to the project library. You can use the filters on the right
          to help you search for specific projects.
        </h2>
      </div>
    </div>
  );
}

export default ProjectsHeader;
