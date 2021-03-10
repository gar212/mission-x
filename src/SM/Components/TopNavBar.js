import React from "react";
import "./TopNavBar.css"
import StarLogo from "./Images/StarLogo.png";

function TopNavBar() {
  return (
  <div className = "TopNavBar">
    <div className = "StarLogo">
        <img src = {StarLogo} alt = "Star Logo"/>
    </div>
    <div className = "HomeLink">
        <p>HOME</p>
    </div>
    <div className = "ProjectsLink">
        <p>PROJECTS</p>
    </div>
    <div className = "TeachersLink">
        <p>TEACHERS</p>
    </div>
  </div>
  );



}

export default TopNavBar;
