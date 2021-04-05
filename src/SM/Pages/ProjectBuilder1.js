import React from "react";
import "./ProjectBuilder1.css";
import ProjectBuilderSidebar from "../Components/ProjectBuilderSidebar.js";
import TopNavProjectBuilder from "../Components/TopNavProjectBuilder.js";
import ProjectBuilderFooter from "../Components/ProjectBuilderFooter.js";

function ProjectBuilder1() {
  return (
    <div>
      <TopNavProjectBuilder />
      <div className="Body">
        <ProjectBuilderSidebar />
        <div className="Content"></div>
      </div>
      <ProjectBuilderFooter />
    </div>
  );
}

export default ProjectBuilder1;
