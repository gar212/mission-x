import React from "react";
import "./ProjectBuilderFooter.css";
import Copywrite from "../Components/Images/© LevelUp Works 2020.png";

function ProjectBuilderFooter() {
  return (
    <div className="footer">
      <img
        src={Copywrite}
        alt="Copywrite LevelUp Works 2020"
        className="Copywrite"
      />
    </div>
  );
}

export default ProjectBuilderFooter;
