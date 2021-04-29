import React from "react";
import "./ProjectSidebar.css";

/*Convert below to props */

function ProjectSidebar() {
  return (
    <div className="ProjectSidebar">
      {/*Subscription */}
      <div className="SidebarSection">
        <h1 className="SidebarHeading">SUBSCRIPTION</h1>
        <div className="CheckOption">
          <input type="checkbox" className="SidebarCheckbox" />
          <h2 className="SidebarSubHeading">Free</h2>
        </div>
        <div className="CheckOption">
          <input type="checkbox" className="SidebarCheckbox" />
          <h2 className="SidebarSubHeading">Premium</h2>
        </div>
      </div>
      {/*ACTIVITY TYPE */}
      <div className="SidebarSection">
        <h1 className="SidebarHeading">ACTIVITY TYPE</h1>
        <div className="CheckOption">
          <input type="checkbox" className="SidebarCheckbox" />
          <h2 className="SidebarSubHeading">Animation</h2>
        </div>
        <div className="CheckOption">
          <input type="checkbox" className="SidebarCheckbox" />
          <h2 className="SidebarSubHeading">Game</h2>
        </div>
        <div className="CheckOption">
          <input type="checkbox" className="SidebarCheckbox" />
          <h2 className="SidebarSubHeading">Chatbot</h2>
        </div>
        <div className="CheckOption">
          <input type="checkbox" className="SidebarCheckbox" />
          <h2 className="SidebarSubHeading">Augmented Reality</h2>
        </div>
      </div>
      {/*YEAR LEVEL */}
      <div className="SidebarSection">
        <h1 className="SidebarHeading">YEAR LEVEL</h1>
        <div className="CheckOption">
          <input type="checkbox" className="SidebarCheckbox" />
          <h2 className="SidebarSubHeading">1 - 4</h2>
        </div>
        <div className="CheckOption">
          <input type="checkbox" className="SidebarCheckbox" />
          <h2 className="SidebarSubHeading">5 - 6</h2>
        </div>
        <div className="CheckOption">
          <input type="checkbox" className="SidebarCheckbox" />
          <h2 className="SidebarSubHeading">7 - 8</h2>
        </div>
        <div className="CheckOption">
          <input type="checkbox" className="SidebarCheckbox" />
          <h2 className="SidebarSubHeading">9 - 13</h2>
        </div>
      </div>
      {/*SUBJECT MATTER*/}
      <div className="SidebarSection">
        <h1 className="SidebarHeading">SUBJECT MATTER</h1>
        <div className="CheckOption">
          <input type="checkbox" className="SidebarCheckbox" />
          <h2 className="SidebarSubHeading">Computer Science</h2>
        </div>
        <div className="CheckOption">
          <input type="checkbox" className="SidebarCheckbox" />
          <h2 className="SidebarSubHeading">Maths</h2>
        </div>
        <div className="CheckOption">
          <input type="checkbox" className="SidebarCheckbox" />
          <h2 className="SidebarSubHeading">Science</h2>
        </div>
        <div className="CheckOption">
          <input type="checkbox" className="SidebarCheckbox" />
          <h2 className="SidebarSubHeading">Language</h2>
        </div>
        <div className="CheckOption">
          <input type="checkbox" className="SidebarCheckbox" />
          <h2 className="SidebarSubHeading">Art</h2>
        </div>
        <div className="CheckOption">
          <input type="checkbox" className="SidebarCheckbox" />
          <h2 className="SidebarSubHeading">Music</h2>
        </div>
      </div>
    </div>
  );
}

export default ProjectSidebar;
