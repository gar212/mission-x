import React from "react";
import "./LevelBar.css";

function LevelBar() {
  return (
    <div className="LevelBar">
      <div id="Beginner">
        <h1 className="Selected">Beginner</h1>
      </div>
      <div id="Intermediate">
        <h1 className="LevelOption">Intermediate</h1>
      </div>
      <div id="Advanced">
        <h1 className="LevelOption">Advanced</h1>
      </div>
      <div>
        <h1 id="Show">Show</h1>
      </div>
      <div id="Select25">
        <h1 className="Selected">25</h1>
      </div>
      <div id="Select50">
        <h1 className="LevelOption">50</h1>
      </div>
      <div id="Select100">
        <h1 className="LevelOption">100</h1>
      </div>
    </div>
  );
}
export default LevelBar;
