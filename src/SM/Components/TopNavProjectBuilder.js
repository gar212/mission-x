import React from "react";
import "../Components/TopNavProjectBuilder.css";
import StarLogo from "./Images/Star Logo 07-3.png";
import NZFlag from "./Images/NZ Flag.png";
import MaoriFlag from "./Images/Maori flag.png";

function TopNavProjectBuilder() {
  return (
    <div className="TopNav">
      <img src={StarLogo} alt="Level Up Works Logo" className="Logo" />
      <div className="ProjIntro">
        <p id="Project">PROJECT</p>
        <p id="Intro">Introduction</p>
      </div>
      <div id="circle">
        <p className="Level">1</p>
      </div>
      <div className="circleSmall"></div>
      <div className="circleSmall"></div>
      <div className="circleSmall"></div>
      <div className="circleSmall"></div>
      <div className="circleSmall"></div>
      <div className="circleSmall"></div>
      <div className="circleSmall"></div>
      <div className="circleSmall"></div>
      <div className="circleSmall"></div>
      <div className="circleSmall"></div>
      <div className="circleSmall"></div>
      <div className="circleSmall"></div>
      <div className="circleSmall"></div>
      <div className="circleSmall"></div>
      <div id="flags">
        <img src={NZFlag} alt="NZ Flag" className="NZFlag" />
        <img src={MaoriFlag} alt="Maori Flag" className="MaoriFlag" />
      </div>
    </div>
  );
}

export default TopNavProjectBuilder;
