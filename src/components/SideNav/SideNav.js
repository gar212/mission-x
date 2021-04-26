import React, {useState} from "react";
import "./SideNav.css";
import SidebarT1 from "../../img/Sidebar1.png";
import SidebarT3 from "../../img/Sidebar3.png";
import SidebarT2 from "../../img/Sidebar2.png";
import SidebarT4 from "../../img/Sidebar4.png";
import SidebarT5 from "../../img/Sidebar5.png";
import TeacherProfile from "../../img/teacherProfile.jpg";
import LearningObjectives from "../../img/ProjectBuilder/objectives-8.png";
import Instructions from "../../img/ProjectBuilder/steps-9.png";
import VideoTutorial from "../../img/ProjectBuilder/video-9.png";
import MakeProject from "../../img/ProjectBuilder/new proj-10.png";
import SubmitProject from "../../img/ProjectBuilder/submit proj-13.png";
import BonusChallenge from "../../img/ProjectBuilder/prize copy-11.png";
import TakeTheQuiz from "../../img/ProjectBuilder/list copy-11.png";
import SideNavItems from "./SideNavItems";

function SideNav(props) {
  // State for SideNav slide in/out function
  const [sideNavOpened, setSideNavOpened] = useState(true);

  // Toggle state of sideNavOpened
  const slideButtonClicked = () => setSideNavOpened(!sideNavOpened);

  // Teacher Side Navigation Array
  let navContent = [];
  const teacherNav = [
    {navName: "Progress Tracker", image: SidebarT1},
    {navName: "Student Profiles", image: SidebarT2},
    {navName: "Help Requests", image: SidebarT3},
    {navName: "Project Submissions", image: SidebarT4},
    {navName: "Project Library", image: SidebarT5},
  ];

  // Sam add student nav contents here
  const studentNav = [
    {navName: "Learning Objectives", image: LearningObjectives},
    {navName: "Instructions", image: Instructions},
    {navName: "Video Tutorial", image: VideoTutorial},
    {navName: "Make Project", image: MakeProject},
    {navName: "Submit Project", image: SubmitProject},
    {navName: "Bonus Challenge", image: BonusChallenge},
    {navName: "Take The Quiz", image: TakeTheQuiz},
  ];

  // Nav Content changes based on TeacherLoggedin state. Either Teacher or student
  if (props.TeacherLoggedIn) {
    navContent = teacherNav;
  } else {
    navContent = studentNav;
  }

  // Loop through SideNav Arrays to populate SideNav bar with props
  let sideNavCurrent = [];

  for (let i = 0; i < navContent.length; i++) {
    sideNavCurrent.push(
      <SideNavItems
        name={navContent[i].navName}
        image={navContent[i].image}
        sideNavState={sideNavOpened}
        clickHandler={() => props.onChange(navContent[i].navName)}
        styleHandler={
          props.optionStateNav === navContent[i].navName ? "active" : ""
        }
        key={i}
      />
    );
  }

  return (
    <div className={sideNavOpened ? "sideNav" : `sideNav sideNavClosed`}>
      <img
        className="profileImage"
        src={TeacherProfile}
        alt="Teacher Profile"
      />
      <ul className="sideNavUpper">{sideNavCurrent}</ul>
      <div className="sideNavExtraContainer">
        <div
          className={
            sideNavOpened
              ? "sideNavToggleContainer"
              : `sideNavToggleContainer sideNavToggleContainerClosed`
          }
        >
          <button className="toggleNav" onClick={slideButtonClicked}>
            <i className="fa fa-caret-left"></i>
          </button>
        </div>
        <ul
          className={
            sideNavOpened ? "sideNavLower" : `sideNavLower sideNavLowerClosed`
          }
        >
          <li className={sideNavOpened ? "" : "sideNavLowerClosed"}>
            <a href="/">
              <i className="fa fa-user-circle" />
              <label>{sideNavOpened ? "Profile" : ""}</label>
            </a>
          </li>
          <li className={sideNavOpened ? "" : "sideNavLowerClosed"}>
            <a href="/">
              <i className="fa fa-cog" />
              <label>{sideNavOpened ? "Settings" : ""}</label>
            </a>
          </li>
          <li className={sideNavOpened ? "" : "sideNavLowerClosed"}>
            <a href="/">
              <i className="fa fa-sign-out" />
              <label>{sideNavOpened ? "Log out" : ""}</label>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
