import React from "react";
import "./TopNavProjectBuilder.css";
import StarLogo from "../../img/LogoBlue.jpg";
import NZFlag from "../../img/NZFlag.jpg";
import MaoriFlag from "../../img/MaoriFlag.jpg";

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
