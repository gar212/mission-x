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
        <p>Home</p>
    </div>
    <div className = "ProjectsLink">
        <p>Projects</p>
    </div>
    <div className = "TeachersLink">
        <p>Teachers</p>
    </div>
  </div>
  );



}

export default TopNavBar;
