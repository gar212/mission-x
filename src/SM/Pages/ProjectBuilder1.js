import React from "react";
import "./ProjectBuilder1.css";

function ProjectBuilder1() {
  return (
    <div>
      <div className="TopNav"></div>
      <div className="Body">
        <div className="SideBar">
          <div className="user">
            <p>PHOTO - Child</p>
          </div>

          <div className="SideBarOption">
            <p>LEARNING OBJECTIVES</p>
          </div>
          <div className="SideBarOption">
            <p>INSTRUCTIONS</p>
          </div>
          <div className="SideBarOption">
            <p>VIDEO TUTORIAL</p>
          </div>
          <div className="SideBarOption">
            <p>MAKE PROJECT</p>
          </div>
          <div className="SideBarOption">
            <p>SUBMIT PROJECT</p>
          </div>
          <div className="SideBarOption">
            <p>BONUS CHALLENGE</p>
          </div>
          <div className="SideBarOption">
            <p>TAKE THE QUIZ</p>
          </div>
        </div>
        <div className="Content"></div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default ProjectBuilder1;
