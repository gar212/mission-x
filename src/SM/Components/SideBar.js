import React from "react";
import "./SideBar.css";
import Underline from "../Components/Images/Line1.png";
import Check from "../Components/Images/Check.png";
import CheckBox from "../Components/Images/Check Box.png";

function ProjectsSidebar() {
  return (
    <div className="ProjectsSidebar">
      <div className="PSHeader">
        {" "}
        {/*PS = ProjectsSidebar*/}
        <p>SUBSCRIPTION</p>
      </div>
      <div className="Underline">
        <PSUnderline />
      </div>
      <div>
        <div className="SideBarRow">
          <CheckBoxTrue />
          <p className="PSText">Free</p>
        </div>
        <div className="SideBarRow">
          <CheckBoxFalse />
          <p className="PSText">Premium</p>
        </div>
      </div>
      <div className="WhiteSpace"></div>{" "}
      {/*Space between each sidebar section */}
      <div className="PSHeader">
        {" "}
        {/*PS = ProjectsSidebar*/}
        <p>ACTIVITY TYPE</p>
      </div>
      <div className="Underline">
        <PSUnderline />
      </div>
      <div>
        <div className="SideBarRow">
          <CheckBoxTrue />
          <p className="PSText">Animation</p>
        </div>
        <div className="SideBarRow">
          <CheckBoxFalse />
          <p className="PSText">Game</p>
        </div>
        <div className="SideBarRow">
          <CheckBoxFalse />
          <p className="PSText">Chatbot</p>
        </div>
        <div className="SideBarRow">
          <CheckBoxFalse />
          <p className="PSText">Augmented Reality</p>
        </div>
      </div>
      <div className="WhiteSpace"></div>{" "}
      {/*Space between each sidebar section */}
      <div className="PSHeader">
        {" "}
        {/*PS = ProjectsSidebar*/}
        <p>YEAR LEVEL</p>
      </div>
      <div className="Underline">
        <PSUnderline />
      </div>
      <div>
        <div className="SideBarRow">
          <CheckBoxTrue />
          <p className="PSText">1 - 4</p>
        </div>
        <div className="SideBarRow">
          <CheckBoxTrue />
          <p className="PSText">5 - 6</p>
        </div>
        <div className="SideBarRow">
          <CheckBoxFalse />
          <p className="PSText">7 - 8</p>
        </div>
        <div className="SideBarRow">
          <CheckBoxFalse />
          <p className="PSText">9 - 13</p>
        </div>
      </div>
      <div className="WhiteSpace"></div>{" "}
      {/*Space between each sidebar section */}
      <div className="PSHeader">
        {" "}
        {/*PS = ProjectsSidebar*/}
        <p>SUBJECT MATTER</p>
      </div>
      <div className="Underline">
        <PSUnderline />
      </div>
      <div>
        <div className="SideBarRow">
          <CheckBoxTrue />
          <p className="PSText">Computer Science</p>
        </div>
        <div className="SideBarRow">
          <CheckBoxFalse />
          <p className="PSText">Maths</p>
        </div>
        <div className="SideBarRow">
          <CheckBoxFalse />
          <p className="PSText">Science</p>
        </div>
        <div className="SideBarRow">
          <CheckBoxFalse />
          <p className="PSText">Language</p>
        </div>
        <div className="SideBarRow">
          <CheckBoxFalse />
          <p className="PSText">Art</p>
        </div>
        <div className="SideBarRow">
          <CheckBoxFalse />
          <p className="PSText">Music</p>
        </div>
      </div>
    </div>
  );
}

function PSUnderline() {
  return (
    <div>
      <img src={Underline} alt="Underline" />
    </div>
  );
}

function CheckBoxTrue() {
  return <img src={Check} alt="Check" className="CheckBox" />;
}

function CheckBoxFalse() {
  return <img src={CheckBox} alt="Check" className="CheckBox" />;
}

export default ProjectsSidebar;
