import React, { useState } from 'react'
import './SideNav.css';
import SidebarT1 from '../img/Sidebar1.png';
import SidebarT2 from '../img/Sidebar2.png';
import SidebarT3 from '../img/Sidebar3.png';
import SidebarT4 from '../img/Sidebar4.png';
import SidebarT5 from '../img/Sidebar5.png';
import TeacherProfile from '../img/teacherProfile.jpg';
import SideNavItems from './SideNav/SideNavItems';

function SideNav(props) {
    // State for SideNav slide in/out function
    const [sideNavOpened, setSideNavOpened] = useState(true);

    // Apply style based on state of sideNavOpened
    const slideSideNav = () => {
        return sideNavOpened ? {} : { width: "110px" }
    };

    const pushLowerNavUp = () => {
        return sideNavOpened ? {} : { top: "40%", flexDirection: "column" }
    };

    const centerLowerNav = () => {
        return sideNavOpened ? {} : { justifyContent: "center" }
    }

    const flipToggleNav = () => {
        return sideNavOpened ? {} : { float: "left", transform: "rotate(180deg)", marginTop: "250px", position: "absolute" }
    }

    // Toggle state of sideNavOpened
    const slideButtonClicked = () => {
        setSideNavOpened(!sideNavOpened)
    };

    // Teacher Navigation Array
    const teacherNav = [
        { navName: "Progress Tracker", image: SidebarT1 },
        { navName: "Student Profiles", image: SidebarT2 },
        { navName: "Help Requests", image: SidebarT3 },
        { navName: "Project Submissions", image: SidebarT4 },
        { navName: "Project Library", image: SidebarT5 }
    ]

    let sideNavCurrent = [];

    // Loop through SideNav Arrays to populate SideNav bar
    for (let i = 0; i < teacherNav.length; i++) {
        sideNavCurrent.push(<SideNavItems
            name={teacherNav[i].navName}
            image={teacherNav[i].image}
            sideNavState={sideNavOpened}
            key={i} />)
    };

    return (
        <div className="sideNav" style={slideSideNav()}>
            <img className="profileImage" src={TeacherProfile} alt="Teacher Profile" />
            <ul className="sideNavUpper">
                {sideNavCurrent}
            </ul>
            <button className="toggleNav" style={flipToggleNav()} onClick={() => { slideButtonClicked() }}><i className="fa fa-caret-left"></i></button>
            <ul className="sideNavLower" style={pushLowerNavUp()}>
                <li style={centerLowerNav()}><a href="/"><i className="fa fa-user-circle" /><label>{sideNavOpened ? 'Profile' : ''}</label></a></li>
                <li style={centerLowerNav()}><a href="/"><i className="fa fa-cog" /><label>{sideNavOpened ? 'Settings' : ''}</label></a></li>
                <li style={centerLowerNav()}><a href="/"><i className="fa fa-sign-out" /><label>{sideNavOpened ? 'Log out' : ''}</label></a></li>
            </ul>
        </div>
    )
}

export default SideNav
