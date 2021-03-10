import React from 'react';
import "./Rows.css";
import Project1 from "./Images/Project 01.png";
import Project2 from "./Images/Project 02.png";
import Project3 from "./Images/Project 03.png";

function Rows() {
    return (
<div id = "Rows">
            <div className = "Row1">
              <div className = "P1">
                <img src = {Project1} alt = "Project 1"/>
                <p className = "RowHeading">Introduction</p>
                <p className = "RowSubHeading">BEGINNER | Animation</p>
              </div>
              <div className = "P2">
              <img src = {Project2} alt = "Project 2"/>
              </div>
              <div className = "P3">
              <img src = {Project3} alt = "Project 3"/>
              </div>
              </div>
            {/* </div>
            <div className = "Row2">
              <h1>Row2</h1>
            </div>
            <div className = "Row3">
              <h1>Row3</h1>
            </div>
            <div className = "Row4">
             <h1>Row4</h1>
            </div>
            <div className = "Row5">
              <h1>Row5</h1> */}
            
          </div>
    );
}

export default Rows;