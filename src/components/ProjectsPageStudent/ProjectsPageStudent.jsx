import React from "react";
import "./ProjectsPageStudent.css";
import TopNav from "../TopNav/TopNav.jsx";
import Footer from "../Footer/Footer.jsx";
import ProjectsSidebar from "../ProjectsPageStudent/ProjectsPageSidebar.jsx";
import BIABar from "../ProjectsPageStudent/BIABar.jsx";
import Rows from "../ProjectsPageStudent/Rows.jsx";
// import Footer from "../Components/Footer.js";

function ProjectsPageStudent() {
  return (
    <div className="Layout">
      <div>
        <TopNav />
      </div>
      <div className="Body">
        <div className="PorjectsSideSize">
          <ProjectsSidebar />
        </div>
        <div>
          <ProjectsHeading />
          <ProjectsHeadSubtext />
          <BIABar />
          {/*BIA - Beginner, Intermediate, Advanced */}
          <Rows />
          <div className="BackToTop">
            <p>BACK TO TOP</p>
          </div>
        </div>
        <div className="Footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

function ProjectsHeading() {
  return (
    <div className="ProjectsHeading">
      <p>PROJECTS</p>
    </div>
  );
}

function ProjectsHeadSubtext() {
  return (
    <div className="ProjectsHeadSubtext">
      <p>
        Welcome to the project library. You can use the filters on the right to
        help you search for specific projects.
      </p>
    </div>
  );
}

export default ProjectsPageStudent;
