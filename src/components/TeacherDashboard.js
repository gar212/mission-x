import React from 'react';
// import { Link } from 'react-router-dom';
import './TeacherDashboard.css';
import LogoBlue from '../img/LogoBlue.jpg';
import MaoriFlag from '../img/MaoriFlag.jpg';
import NZFlag from '../img/NZFlag.jpg';
import TeacherProfile from '../img/teacherProfile.jpg';

import Sidebar1 from '../img/Sidebar1.png';
import Sidebar2 from '../img/Sidebar2.png';
import Sidebar3 from '../img/Sidebar3.png';
import Sidebar4 from '../img/Sidebar4.png';
import Sidebar5 from '../img/Sidebar5.png';

function TeacherDashboard() {
    return (
        <div className="container">
            {/* // Header */}
            <div className="header">
                <img className="logo" src={LogoBlue} alt="Level Up Works Logo"/>
                <div className="language">
                    <img src={NZFlag} alt="NZ Flag"/>
                    <img src={MaoriFlag} alt="Maori Flag"/>
                </div>
            </div>
            {/* End of Header */}
            {/* Main Body*/}
            <div className="mainContainer">
                <div className="sideMenu">
                    <img className="teacherProfile" src={TeacherProfile} alt="Teacher Profile"/>
                    <ul>
                        <li><img src={Sidebar1} alt="Progress Tracker Icon" />Progress Tracker</li>
                        <li><img src={Sidebar2} alt="Student Profiles Icon" />Student Profiles</li>
                        <li><img src={Sidebar3} alt="Help Request Icon" />Help Requests</li>
                        <li><img src={Sidebar4} alt="Project Submission Icon" />Project Submissions</li>
                        <li><img src={Sidebar5} alt="Project Library Icon" />Project Library</li>
                    </ul>

                    <ul>
                        <li>Profile</li>
                        <li>Settings</li>
                        <li>Log out</li>
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
            {/* End of Main Body */}

            <footer>
                <p>© Levelup Works 2020</p>
            </footer>
        </div>
    );  
};


export default TeacherDashboard;