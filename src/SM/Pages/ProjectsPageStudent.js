import React from "react";
import "./ProjectsPageStudent.css";
import TopNavBar from "../Components/TopNavBar.js";
import ProjectsSidebar from "../Components/SideBar.js";
import BIABar from "../Components/BIABar.js";


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
          <div id = "Rows">
            <div className = "Row1">
              <h1>Row1</h1>
            </div>
            <div className = "Row2">
              <h1>Row2</h1>
            </div>
            <div className = "Row3">
              <h1>Row3</h1>
            </div>
            <div className = "Row4">
             <h1>Row4</h1>
            </div>
            <div className = "Row5">
              <h1>Row5</h1>
            </div>
          </div>
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
