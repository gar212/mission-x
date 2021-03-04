import React from 'react';
// import { Link } from 'react-router-dom';
import './TeacherDashboard.css';
import LogoBlue from '../img/LogoBlue.jpg';
import MaoriFlag from '../img/MaoriFlag.jpg';
import NZFlag from '../img/NZFlag.jpg';
import TeacherProfile from '../img/teacherProfile.jpg';

function TeacherDashboard() {
    return (
        <div className="container">
            {/* // Navbar */}
            <div className="navbar">
                <img className="logo" src={LogoBlue} alt="Level Up Works Logo"/>
                <div className="language">
                    <img src={NZFlag} alt="NZ Flag"/>
                    <img src={MaoriFlag} alt="Maori Flag"/>
                </div>
            </div>
            {/* End of Navbar */}
            {/* Main Body*/}
            <div className="mainContainer">
                <div className="sideMenu">
                    <img className="teacherProfile" src={TeacherProfile} alt="Teacher Profile"/>
                    <ul>
                        <li>Progress Tracker</li>
                        <li>Student Profiles</li>
                        <li>Help Requests</li>
                        <li>Project Submissions</li>
                        <li>Project Library</li>
                    </ul>
                </div>
                
                <div className="bodyContain">
                    <div className="bodyTopButton">
                        <button>Take Screenshot</button>
                        <button>Help Center</button>
                        <button>More Projects</button>
                    </div>
                    <div className="bodyMain">
                
                    </div>
                </div>
            </div>




            <footer>
                <p>© Levelup Works 2020</p>
            </footer>
        </div>
    );  
};


export default TeacherDashboard;