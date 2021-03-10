import React from "react";
import "./ProjectsPageStudent.css";
import TopNavBar from "../Components/TopNavBar.js";
import ProjectsSidebar from "../Components/SideBar.js";
import BIABar from "../Components/BIABar.js";
import Rows from "../Components/Rows.js"


function ProjectsPageStudent() {
  return (
    <div className = "Layout">
      <div className = "TopNavBar">
        <TopNavBar />
      </div>
      <div className = "Body">
        <div className = "PorjectsSideSize">
          <ProjectsSidebar />
        </div>
        <div>
          <ProjectsHeading />
          <ProjectsHeadSubtext />
          <BIABar/>
          {/*BIA - Beginner, Intermediate, Advanced */}
          <Rows />
        </div>
        
      </div>   
      

    </div>
    
  );
}

function ProjectsHeading(){
  return (
  <div className="ProjectsHeading">
    <p>PROJECTS</p>
  </div>
  );
}

function ProjectsHeadSubtext(){
  return(
    <div className="ProjectsHeadSubtext">
      <p>Welcome to the project library. You can use the filters on the right to help you search for specific projects.</p>
    </div>
  )
}




export default ProjectsPageStudent;
