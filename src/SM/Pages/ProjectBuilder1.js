import React from "react";
import "./ProjectBuilder1.css";
import ProjectBuilderSidebar from "../Components/ProjectBuilderSidebar.js";

function ProjectBuilder1() {
  return (
    <div>
      <div className="TopNav"></div>
      <div className="Body">
        <ProjectBuilderSidebar />
        <div className="Content"></div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default ProjectBuilder1;
