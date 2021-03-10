import React from "react";
import "./TopNavBar.css";
import StarLogo from "./Images/StarLogo.png";
import Lang from "./Images/LANG.png";
import MaoriFlag from "./Images/Maori flag.png";
import NZFlag from "./Images/NZ Flag.png";
import StudentPhoto from "./Images/Ellipse 38.png";

function TopNavBar() {
  return (
    <div className="TopNavBar">
      <div className="StarLogo">
        <img src={StarLogo} alt="Star Logo" />
      </div>
      <div className="HomeLink">
        <p>HOME</p>
      </div>
      <div className="ProjectsLink">
        <p>PROJECTS</p>
      </div>
      <div className="TeachersLink">
        <p>TEACHERS</p>
      </div>
      <div className="Student">
        <div className="Language">
          <img src={Lang} alt="Lang" className="Lang" />
          <img src={NZFlag} alt="NZ Flag" className="NZFlag" />
          <img src={MaoriFlag} alt="Maori Flag" className="MaoriFlag" />
        </div>
        <div className="Bio">
          <img src={StudentPhoto} alt="Student Pic" className="StudentPhoto" />
          <p className="StudentName">RAWIRI FLETCHER</p>
        </div>
      </div>
    </div>
  );
}

export default TopNavBar;
