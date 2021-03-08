import React from "react";
import Underline from "../Components/Images/Line1.png";
import "./SideBar.css"


function ProjectsSidebar(){
    return(
      <div className="ProjectsSidebar">
        <div className = "PSHeader"> {/*PS = ProjectsSidebar*/}
        <p>SUBSCRIPTION</p>
        </div>
        <div className = "Underline">
        <PSUnderline />
        </div>
        <div>
          <p className = "PSText">Free</p>
          <p className = "PSText">Premium</p>
        </div>
  
        <div className = "WhiteSpace"></div> {/*Space between each sidebar section */}
  
        <div className = "PSHeader"> {/*PS = ProjectsSidebar*/}
        <p>ACTIVITY TYPE</p>
        </div>
        <div className = "Underline">
        <PSUnderline />
        </div>
        <div>
          <p className = "PSText">Animation</p>
          <p className = "PSText">Game</p>
          <p className = "PSText">Chatbot</p>
          <p className = "PSText">Augmented Reality</p>
        </div>
  
        <div className = "WhiteSpace"></div> {/*Space between each sidebar section */}
  
        <div className = "PSHeader"> {/*PS = ProjectsSidebar*/}
        <p>YEAR LEVEL</p>
        </div>
        <div className = "Underline">
        <PSUnderline />
        </div>
        <div>
          <p className = "PSText">1 - 4</p>
          <p className = "PSText">5 - 6</p>
          <p className = "PSText">7 - 8</p>
          <p className = "PSText">9 - 13</p>
        </div>
  
        <div className = "WhiteSpace"></div> {/*Space between each sidebar section */}
  
        <div className = "PSHeader"> {/*PS = ProjectsSidebar*/}
        <p>SUBJECT MATTER</p>
        </div>
        <div className = "Underline">
        <PSUnderline />
        </div>
        <div>
          <p className = "PSText">Computer Science</p>
          <p className = "PSText">Maths</p>
          <p className = "PSText">Science</p>
          <p className = "PSText">Language</p>
          <p className = "PSText">Art</p>
          <p className = "PSText">Music</p>
        </div>
        
      </div>
    )
  }
  
  function PSUnderline (){
    return (
      <div>
        <img src = {Underline} alt = "Underline"/>
      </div>
    )
  }
  
  export default ProjectsSidebar;