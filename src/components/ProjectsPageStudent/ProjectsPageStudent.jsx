import React, {useState, useEffect} from "react";
import "./ProjectsPageStudent.css";
import TopNav from "../TopNav/TopNav.jsx";
import ProjectsHeader from "./ProjectsHeader";

import Footer from "../Footer/Footer.jsx";
import ProjectsSidebar from "../ProjectsPageStudent/ProjectsPageSidebar.jsx";
import BIABar from "../ProjectsPageStudent/BIABar.jsx";
// import Rows from "../ProjectsPageStudent/Rows.jsx";
import Projects from "./Projects";
import ProjectsData from "./ProjectsData";

const ProjectsPageStudent = () => {
  const [isLoading, setLoading] = useState(true);
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      let response = await fetch("/projectbuilder");
      response = await response.json();
      setApiData(response);
      setLoading(false);
    }
    fetchAPI();
  }, []);

  // Potential solution could be mapping through an array until year level is confirmed to be correct
  // console.log(apiData[0].Year);

  // function ProjectsPageStudent() {
  return (
    <div className="Layout">
      <div>
        <TopNav />
      </div>
      <div>
        {/*Create a div for header and sub header */}
        <ProjectsHeader />
      </div>
      {/*Create a div for the sidebar */}
      
      {/*Create a div for BIA & Projects */}
      {/*Create a div back to top button */}
      {/*Change footer from absolute styling */}

      {/*Old code below this line */}
      <div className="Body">
        <div className="PorjectsSideSize">
          <ProjectsSidebar />
        </div>
        <div>
          <ProjectsHeading />
          <ProjectsHeadSubtext />
          {/*BIA - Beginner, Intermediate, Advanced */}
          <BIABar />
          {/*TESTING - can replace with <Rows /> */}
          <div className="ProjectContainer">
            {/* <ProjectsData /> = test function */}
            {apiData.map((e) => (
              <Projects
                key={e.ProjectID}
                image={e.MainImage}
                // image={`data:image/jpg;base64,${btoa(
                //   String.fromCharCode(...new Uint8Array(e.Image.data))
                // )}`} //Usually MainImage
                subject={e.SubjectMatter2} //e.g. Introduction
                course={e.Course} //e.g. Beginner
                activity={e.ActivityType} // e.g. animation
                completed={e.ProjectID}
              />
            ))}
          </div>
          {/*TESTING - can replace with <Rows /> */}
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
};

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
