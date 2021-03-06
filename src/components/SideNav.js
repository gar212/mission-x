import React from 'react'
import './SideNav.css';
import Sidebar1 from '../img/Sidebar1.png';
import Sidebar2 from '../img/Sidebar2.png';
import Sidebar3 from '../img/Sidebar3.png';
import Sidebar4 from '../img/Sidebar4.png';
import Sidebar5 from '../img/Sidebar5.png';
import TeacherProfile from '../img/teacherProfile.jpg';

const SideNav = (props) => {
    return (
                <div className="sideNav">
                    <img className="profileImage" src={TeacherProfile} alt="Teacher Profile"/>
                    <ul className="sideNavUpper">
                        <li><img src={Sidebar1} alt="Progress Tracker Icon" />Progress Tracker</li>
                        <li><img src={Sidebar2} alt="Student Profiles Icon" />Student Profiles</li>
                        <li><img src={Sidebar3} alt="Help Request Icon" />Help Requests</li>
                        <li><img src={Sidebar4} alt="Project Submission Icon" />Project Submissions</li>
                        <li><img src={Sidebar5} alt="Project Library Icon" />Project Library</li>
                    </ul>

                    <ul className="sideNavLower">
                        <li>Profile</li>
                        <li>Settings</li>
                        <li>Log out</li>
                    </ul>
                </div>
    )
}

export default SideNav
