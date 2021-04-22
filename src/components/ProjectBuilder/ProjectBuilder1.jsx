import React from "react";
import "./ProjectBuilder1.css";
import TopNavProjectBuilder from "../ProjectBuilder/TopNavProjectBuilder.jsx";
import ProjectBuilderSidebar from "../ProjectBuilder/ProjectBuilderSidebar.jsx";
import ProjectBuilderContent from "../ProjectBuilder/ProjectBuilderContent.jsx";
import ProjectBuilderFooter from "../ProjectBuilder/ProjectBuilderFooter.jsx";

function ProjectBuilder1() {
  return (
    <div>
      <TopNavProjectBuilder />
      <div className="Body">
        <ProjectBuilderSidebar />
        <ProjectBuilderContent />
      </div>
      <ProjectBuilderFooter />
    </div>
  );
}

export default ProjectBuilder1;
