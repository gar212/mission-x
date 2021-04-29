import React from "react";
import "./ProjectsPageStudent.css";
import TopNav from "../TopNav/TopNav.jsx";
import ProjectsHeader from "./ProjectsHeader";
import ProjectSidebar from "./ProjectSidebar";
import ProjectBody from "./ProjectBody";
import BackToTop from "./BackToTop";
import Footer from "../Footer/Footer.jsx";

/*Manually remove
import ProjectsSidebar from "../ProjectsPageStudent/ProjectsPageSidebar.jsx";
import BIABar from "../ProjectsPageStudent/BIABar.jsx";
// import Rows from "../ProjectsPageStudent/Rows.jsx";
import Projects from "./Projects";
import ProjectsData from "./ProjectsData";
*/

const ProjectsPageStudent = () => {
  return (
    <div className="Layout">
      <TopNav />
      <ProjectsHeader />
      <div className="Body">
        <ProjectSidebar />
        <ProjectBody />
      </div>
      <BackToTop />
      <Footer />
    </div>
  );
};

export default ProjectsPageStudent;
