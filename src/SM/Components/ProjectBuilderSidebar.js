import React from "react";
import "../Components/ProjectBuilderSidebar.css";
import StudentPic from "../Components/Images/StudentPic.png";
import Objectives from "../Components/Images/objectives-8.png";
import Steps from "../Components/Images/steps-9.png";
import Video from "../Components/Images/video-9.png";
import NewProj from "../Components/Images/new proj-10.png";
import SubmitProj from "../Components/Images/submit proj-13.png";
import BonusChal from "../Components/Images/prize copy-11.png";
import TakeQuiz from "../Components/Images/list copy-11.png";
import Icon from "../Components/Images/Icon awesome-user-circle.png";
import Settings from "../Components/Images/Icon material-settings.png";
import Log from "../Components/Images/Icon awesome-sign-out-alt.png";

function ProjectBuilderSidebar() {
  return (
    <div className="SideBar">
      <div className="user">
        <img
          src={StudentPic}
          alt="Student"
          className="StudentPhotoProjectBuilder"
        />
      </div>
      <div className="SideBarOption">
        <img src={Objectives} alt="Objectives" className="SidebarImg" />
        <p className="SidebarText">LEARNING OBJECTIVES</p>
      </div>
      <div className="SideBarOption">
        <img src={Steps} alt="Steps" className="SidebarImg" />
        <p className="SidebarText">INSTRUCTIONS</p>
      </div>
      <div className="SideBarOption">
        <img src={Video} alt="Video" className="SidebarImg" />
        <p className="SidebarText">VIDEO TUTORIAL</p>
      </div>
      <div className="SideBarOption">
        <img src={NewProj} alt="Objectives" className="SidebarImg" />
        <p className="SidebarText">MAKE PROJECT</p>
      </div>
      <div className="SideBarOption">
        <img src={SubmitProj} alt="Submit Project" className="SidebarImg" />
        <p className="SidebarText">SUBMIT PROJECT</p>
      </div>
      <div className="SideBarOption">
        <img src={BonusChal} alt="Bonus Challenge" className="SidebarImg" />
        <p className="SidebarText">BONUS CHALLENGE</p>
      </div>
      <div className="SideBarOption">
        <img src={TakeQuiz} alt="Take The Quiz" className="SidebarImg" />
        <p className="SidebarText">TAKE THE QUIZ</p>
      </div>
      <div className="SidebarCollapse">
        <div className="ArrowBackground">
          <div className="Triangle"></div>
        </div>
      </div>
      <div className="SidebarFoot">
        <div className="SideProfile ProfileMargin">
          <img src={Icon} alt="Icon" className="SideFootImg" />
          <p className="FooterText ">Profile</p>
        </div>
        <div className="SideSettings SettingsMargin">
          <img src={Settings} alt="Settings" className="SideFootImg" />
          <p className="FooterText ">Settings</p>
        </div>
        <div className="SideLog LogMargin">
          <img src={Log} alt="Log Out" className="SideFootImg" />
          <p className="FooterText ">Log Out</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectBuilderSidebar;
