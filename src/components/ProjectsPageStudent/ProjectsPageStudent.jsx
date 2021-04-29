import React from "react";
import "./ProjectsPageStudent.css";
import TopNav from "../TopNav/TopNav.jsx";
import ProjectsHeader from "./ProjectsHeader";
import ProjectSidebar from "./ProjectSidebar";
import ProjectBody from "./ProjectBody";
import BackToTop from "./BackToTop";
import Footer from "../Footer/Footer.jsx";

const ProjectsPageStudent = () => {
  return (
    <div>
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
