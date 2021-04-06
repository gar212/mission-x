import React from "react";
import "./ProjectBuilderContent.css";
import LookBlock1 from "./Images/Screen Shot 2020-04-29 at 9.09.52 PM.png";
import LookBlock2 from "./Images/Screen Shot 2020-04-25 at 11.30.04 PM.png";
import LookBlock3 from "./Images/Screen Shot 2020-04-25 at 11.32.03 PM.png";
import ControlBlock1 from "./Images/Screen Shot 2020-04-29 at 9.10.19 PM.png";
import ControlBlock2 from "./Images/Screen Shot 2020-04-25 at 11.30.43 PM.png";
import MotionBlock1 from "./Images/Screen Shot 2020-04-29 at 9.10.04 PM.png";
import MotionBlock2 from "./Images/Screen Shot 2020-04-25 at 11.30.57 PM.png";

function ProjectBuilderContent() {
  return (
    <div className="Content">
      <div className="Buttons">
        <div className="ScreenShot">
          <p className="ButtonText">Take ScreenShot</p>
        </div>
        <div className="TeacherHelp">
          <p className="ButtonText">Take ScreenShot</p>
        </div>
        <div className="Projects">
          <p className="ButtonText">Take ScreenShot</p>
        </div>
      </div>
      <div className="scratchBackground">
        <p className="scratchHeading">Explore Scratch blocks</p>
        <p className="scratchSubheading">
          Learn the basic function of some basic scratch blocks such as “say,”
          “wait,” “go to” and “hide.”
        </p>
        <div className="Blocks">
          <div className="LookBlocks">
            <p className="BlockHeading">Look Blocks</p>
            <div className="BlockContainer">
              <div className="LookLeft"></div>
              <img src={LookBlock1} alt="Look Block 1" className="LookBlock1" />
              <div className="LookRight">
                <img
                  src={LookBlock2}
                  alt="Look Block 2"
                  className="LookBlock2"
                />
                <div>
                  <img
                    src={LookBlock3}
                    alt="Look Block 3"
                    className="LookBlock3"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="ControlBlocks">
            <p className="BlockHeading">Control Blocks</p>
            <div className="BlockContainer">
              <div className="ControlLeft"></div>
              <img
                src={ControlBlock1}
                alt="Control Block 1"
                className="ControlBlock1"
              />
              <div className="ControlRight">
                <img
                  src={ControlBlock2}
                  alt="Control Block 2"
                  className="ControlBlock2"
                />
              </div>
            </div>
          </div>

          <div className="MotionBlocks">
            <p className="BlockHeading">Motion Blocks</p>
            <div className="BlockContainer">
              <div className="MotionLeft">
                <img
                  src={MotionBlock1}
                  alt="Motion Block 1"
                  className="MotionBlock1"
                />
              </div>
              <div className="MotionRight">
                <img
                  src={MotionBlock2}
                  alt="Motion Block 2"
                  className="MotionBlock2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectBuilderContent;
