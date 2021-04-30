import React, {useState} from "react";
// import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import SideNav from "./SideNav/SideNav";
import ProgressTracker from "./ProgressTracker/ProgressTracker";
import StudentProfiles from "./StudentProfiles/StudentProfiles";
import LearningObjectives from "./LearningObjectives/LearningObjectives";
import StudentHelpRequests from "./HelpRequests/StudentHelpRequests";
import Instructions from "./Instructions/Instructions";
import VideoTutorial from "./VideoTutorial/VideoTutorial";
import MakeProject from "./MakeProject/MakeProject";
import SubmitProject from "./SubmitProject/SubmitProject";
import ProjectSubmissions from "./ProjectSubmissions/ProjectSubmissions";

import LogoBlue from "../img/LogoBlue.jpg";
import MaoriFlag from "../img/MaoriFlag.jpg";
import NZFlag from "../img/NZFlag.jpg";
import "./Dashboard.css";

const Dashboard = (props) => {
  // Checks who is logged in. Teacher = True, Student = False. Affects rendering of SideNav and bodyMain Components
  const [TeacherLoggedIn, setTeacherLoggedIn] = useState(true);

  // Changes components displayed in the body based on state. Clicking on SideNav changes the state
  const [OptionState, setOptionState] = useState(
    TeacherLoggedIn ? "Progress Tracker" : "Learning Objectives"
  );

  const OptionEnum = {
    // Teacher Dashboard
    progressTracker: "Progress Tracker",
    studentProfiles: "Student Profiles",
    helpRequests: "Help Requests",
    projectSubmissions: "Project Submissions",
    // Student Dashboard
    learningObjectives: "Learning Objectives",
    instructions: "Instructions",
    videoTutorial: "Video Tutorial",
    makeProject: "Make Project",
    submitProject: "Submit Project",
  };

  // Switch case to return components based on State of OptionState
  const displayMainComponent = (optionEnum) => {
    switch (optionEnum) {
      // Teacher Dashboard
      case OptionEnum.progressTracker:
        return <ProgressTracker />;
      case OptionEnum.studentProfiles:
        return <StudentProfiles />;
      case OptionEnum.helpRequests:
        return <StudentHelpRequests />;
      case OptionEnum.projectSubmissions:
        return <ProjectSubmissions />;
      // Student Dashboard
      case OptionEnum.learningObjectives:
        return <LearningObjectives />;
      case OptionEnum.instructions:
        return <Instructions />;
      case OptionEnum.videoTutorial:
        return <VideoTutorial />;
      case OptionEnum.makeProject:
        return <MakeProject />;
      case OptionEnum.submitProject:
        return <SubmitProject />;

      // Default Case
      default:
        console.log("Error with switch statement or does not exist");
    }
  };



  return (
    <div className="container">
      {/* // Header */}
      <div className="header">
        <img className="logo" src={LogoBlue} alt="Level Up Works Logo" />
        <div className="language">
          <img src={NZFlag} alt="NZ Flag" />
          <img src={MaoriFlag} alt="Maori Flag" />
        </div>
      </div>
      {/* End of Header */}
      {/* Main Body*/}
      <div className="mainContainer">
        <SideNav
          TeacherLoggedIn={TeacherLoggedIn}
          optionStateNav={OptionState}
          onChange={setOptionState}
        />
        <div className="bodyContain">
          <div className="bodyTopButton">
            <button onClick={() => setTeacherLoggedIn(!TeacherLoggedIn)}>
              Take Screenshot
            </button>
            <button>Help Center</button>
            <button>More Projects</button>
          </div>
          <div className="bodyMain">
            <div
              className={
                TeacherLoggedIn ? "bodyWrapper" : "bodyWrapper hideScrollbar"
              }
            >
              {displayMainComponent(OptionState)}
            </div>
          </div>
        </div>
      </div>
      {/* End of Main Body */}
      <footer>
        <p>© Levelup Works 2020</p>
      </footer>
    </div>
  );
};

export default Dashboard;
