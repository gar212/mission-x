import React, {Component} from "react";
import "./TopNav.css";
import StarLogo from "../../img/TopNav/StarLogo.png";
import Lang from "../../img/TopNav/LANG.png";
import MaoriFlag from "../../img/MaoriFlag.jpg";
import NZFlag from "../../img/NZFlag.jpg";
import StudentPhoto from "../../img/TopNav/Ellipse 38.png";
import ProfileNav from "../ProjectsPageStudent/ProfileNav.jsx";

class TopNav extends Component {
  state = {
    visible: false,
  };

  render() {
    return (
      <div className="TopNavBar">
        <div className="StarLogo">
          <img src={StarLogo} alt="Star Logo" />
        </div>
        <div className="HomeLink">
          <p>HOME</p>
        </div>
        <div className="ProjectsLink">
          <p>PROJECTS</p>
        </div>
        <div className="TeachersLink">
          <p>TEACHERS</p>
        </div>
        <div className="Student">
          <div className="Language">
            <img src={Lang} alt="Lang" className="Lang" />
            <img src={NZFlag} alt="NZ Flag" className="NZFlag" />
            <img src={MaoriFlag} alt="Maori Flag" className="MaoriFlag" />
          </div>
          {this.state.visible ? <ProfileNav /> : null}
          {/*Ternary operator either or*/}
          <div className="Bio">
            <img
              src={StudentPhoto}
              alt="Student Pic"
              className="StudentPhoto"
              onClick={() => {
                this.setState({visible: !this.state.visible});
              }}
            />
            <p
              className="StudentName"
              onClick={() => {
                this.setState({visible: !this.state.visible});
              }}
            >
              RAWIRI FLETCHER
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default TopNav;
