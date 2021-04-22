import React from "react";
import "./BIABar.css";
import Beginner from "../../img/ProjectsPageStudent/BEGINNER.png";
import Intermediate from "../../img/ProjectsPageStudent/INTERMEDIATE.png";
import Advanced from "../../img/ProjectsPageStudent/ADVANCED.png";
import MenuSeperator from "../../img/ProjectsPageStudent/Menus - Separator - Aqua.png";
import BlueRect from "../../img/ProjectsPageStudent/Rectangle 228.png";
import Button from "../../img/ProjectsPageStudent/Button.png";
import SegmentedControl from "../../img/ProjectsPageStudent/Segmented Control - 3 Text Items.png";

// eslint-disable-next-line
{
  /*BIA - Beginner, Intermediate, Advanced */
}

function BIABar() {
  return (
    <div className="BIABar">
      <img src={Button} alt="Button" className="Button" />
      <img
        src={BlueRect}
        alt="Beginner Background"
        className="BeginnerBackground"
      />
      <img src={Beginner} alt="Beginner Text" className="BeginnerText" />
      <img
        src={Intermediate}
        alt="Intermediate Text"
        className="IntermediateText"
      />
      <img src={MenuSeperator} alt="|" className="MenuSeperator" />
      <img src={Advanced} alt="Advanced Text" className="AdvancedText" />
      <p className="ShowText">SHOW</p>
      <img
        src={SegmentedControl}
        alt="Segmented Control"
        className="SegmentedControl"
      />
    </div>
  );
}

export default BIABar;
