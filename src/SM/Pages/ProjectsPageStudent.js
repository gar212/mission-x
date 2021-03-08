import React from "react";
import "./ProjectsPageStudent.css";
import TopNavBar from "../Components/TopNavBar.js";
import ProjectsSidebar from "../Components/SideBar.js";
import BIABar from "../Components/BIABar.js";


function ProjectsPageStudent() {
  return (
    <div>
      <div>
        <TopNavBar />
      </div>
      <div>
        <ProjectsHeading />
        <ProjectsHeadSubtext />
      </div>
      <div className = "Body">
          <div className = "ProjectsSidebar">
            <ProjectsSidebar />
          </div>
          <div className = "BIABar"> {/*Move this above the side bar inline with ProjectsHeading/Subtext */}
            <BIABar/>
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
