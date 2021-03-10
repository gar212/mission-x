import React, { useState } from 'react'
import './SideNav.css';
import Sidebar1 from '../img/Sidebar1.png';
import Sidebar2 from '../img/Sidebar2.png';
import Sidebar3 from '../img/Sidebar3.png';
import Sidebar4 from '../img/Sidebar4.png';
import Sidebar5 from '../img/Sidebar5.png';
import TeacherProfile from '../img/teacherProfile.jpg';

function SideNav(props) {
    // State for SideNav slide in/out function
    const [sideNavOpened, setSideNavOpened] = useState(true);

    // Apply style based on state of sideNavOpened
    const slideSideNav = () => {
        return sideNavOpened ? {} : { width: "110px" }
    };

    // Toggle state of sideNavOpened
    const slideButtonClicked = () => {
        setSideNavOpened(!sideNavOpened)
    };

    return (
        <div className="sideNav" style={slideSideNav()}>
            <img className="profileImage" src={TeacherProfile} alt="Teacher Profile" />
            <ul className="sideNavUpper">
                <li><img src={Sidebar1} alt="Progress Tracker Icon" />{sideNavOpened ? 'Progress Tracker' : ''}</li>
                <li><img src={Sidebar2} alt="Student Profiles Icon" />{sideNavOpened ? 'Student Profiles' : ''}</li>
                <li><img src={Sidebar3} alt="Help Request Icon" />{sideNavOpened ? 'Help Requests' : ''}</li>
                <li><img src={Sidebar4} alt="Project Submission Icon" />{sideNavOpened ? 'Project Submissions' : ''}</li>
                <li><img src={Sidebar5} alt="Project Library Icon" />{sideNavOpened ? 'Project Library' : ''}</li>
            </ul>
            <button className="toggleNav" onClick={() => { slideButtonClicked() }}><i className="fa fa-caret-left"></i></button>
            <ul className="sideNavLower">
                <li><a href="/"><i className="fa fa-user-circle" /><label>Profile</label></a></li>
                <li><a href="/"><i className="fa fa-cog" /><label>Settings</label></a></li>
                <li><a href="/"><i className="fa fa-sign-out" /><label>Log out</label></a></li>
            </ul>
        </div>
    )
}

export default SideNav
