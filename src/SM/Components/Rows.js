import React from "react";
import "./Rows.css";
import Project1 from "./Images/Project 01.png";
import Project2 from "./Images/Project 02.png";
import Project3 from "./Images/Project 03.png";
import Project4 from "./Images/Project 04.png";
import Project5 from "./Images/Project 05.png";
import Project6 from "./Images/Project 06.png";
import Project7 from "./Images/Project 07.png";
import Project8 from "./Images/Project 08.png";
import Project9 from "./Images/Project 09.png";
import Project10 from "./Images/Project 10.png";
import Project11 from "./Images/Project 11.png";
import Project12 from "./Images/Project 12.png";
import Project13 from "./Images/Project 13.png";
import Project14 from "./Images/Project 14.1.png";
import Project15 from "./Images/Project 14.2.png";

function Rows() {
  return (
    <div id="Rows">
      <div className="Row">
        <div className="C1">
          {" "}
          {/*C = Collum */}
          <img src={Project1} alt="Project 1" />
          <p className="RowHeading">Introduction</p>
          <RowSubHeading />
        </div>
        <div className="C2">
          <img src={Project2} alt="Project 2" />
          <p className="RowHeading">My Birthday</p>
          <RowSubHeading />
        </div>
        <div className="C3">
          <img src={Project3} alt="Project 3" />
          <p className="RowHeading">10 Block Challenge</p>
          <RowSubHeading />
        </div>
      </div>
      <div className="Row">
        <div className="C1">
          <img src={Project4} alt="Project 4" />
          <p className="RowHeading">Build a band</p>
          <RowSubHeading />
        </div>
        <div className="C2">
          <img src={Project5} alt="Project 5" />
          <p className="RowHeading">The bear and the monkey</p>
          <RowSubHeading />
        </div>
        <div className="C3">
          <img src={Project6} alt="Project 6" />
          <p className="RowHeading">Debugging</p>
          <RowSubHeading />
        </div>
      </div>
      <div className="Row">
        <div className="C1">
          <img src={Project7} alt="Project 7" />
          <p className="RowHeading">About me</p>
          <RowSubHeading />
        </div>
        <div className="C2">
          <img src={Project8} alt="Project 8" />
          <p className="RowHeading">I am here!</p>
          <RowSubHeading />
        </div>
        <div className="C3">
          <img src={Project9} alt="Project 9" />
          <p className="RowHeading">Funny faces</p>
          <RowSubHeading />
        </div>
      </div>
      <div className="Row">
        <div className="C1">
          <img src={Project10} alt="Project 10" />
          <p className="RowHeading">It tickles!</p>
          <RowSubHeading />
        </div>
        <div className="C2">
          <img src={Project11} alt="Project 11" />
          <p className="RowHeading">Penguin in the Desert</p>
          <RowSubHeading />
        </div>
        <div className="C3">
          <img src={Project12} alt="Project 12" />
          <p className="RowHeading">Time Travel</p>
          <RowSubHeading />
        </div>
      </div>
      <div className="Row">
        <div className="C1">
          <img src={Project13} alt="Project 13" />
          <p className="RowHeading">Birthday Card</p>
          <RowSubHeading />
        </div>
        <div className="C2">
          <img src={Project14} alt="Project 14" />
          <p className="RowHeading">The Lion and the Mouse Part 1</p>
          <RowSubHeading />
        </div>
        <div className="C3">
          <img src={Project15} alt="Project 15" />
          <p className="RowHeading">The Lion and the</p>
          <RowSubHeading />
        </div>
      </div>
    </div>
  );
}

function RowSubHeading() {
  return <p className="RowSubHeading">BEGINNER | Animation</p>;
}

export default Rows;
