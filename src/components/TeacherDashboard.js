import React, { useState } from 'react'
// import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import SideNav from './SideNav';
import ProgressTracker from './ProgressTracker/ProgressTracker';
import StudentProfiles from './StudentProfiles/StudentProfiles';

import LogoBlue from '../img/LogoBlue.jpg';
import MaoriFlag from '../img/MaoriFlag.jpg';
import NZFlag from '../img/NZFlag.jpg';
import './TeacherDashboard.css';

const TeacherDashboard = (props) => {

    // Checks who is logged in. Teacher = True, Student = False. Affects rendering of SideNav and bodyMain Components
    const [TeacherLoggedIn, setTeacherLoggedIn] = useState(true);

    // Changes components displayed in the body based on state. Clicking on SideNav changes the state
    const [OptionState, setOptionState] = useState(0);

    // Enums to replace option state
    // const optionState = {
    //     progressTracker: 'progress',
    //     studentProfiles: 'studentProfile'
    // }

    return (
        <div className="container">
            {/* // Header */}
            <div className="header">
                <img className="logo" src={LogoBlue} alt="Level Up Works Logo" />
                <div className="language">
                    <img src={NZFlag} alt="NZ Flag" />
                    <img src={MaoriFlag} alt="Maori Flag" />
                </div>
            </div>
            {/* End of Header */}
            {/* Main Body*/}
            <div className="mainContainer">
                <SideNav TeacherLoggedIn={TeacherLoggedIn} optionStateNav={OptionState} onChange={setOptionState} />
                <div className="bodyContain">
                    <div className="bodyTopButton">
                        <button>Take Screenshot</button>
                        <button>Help Center</button>
                        <button>More Projects</button>
                    </div>
                    <div className="bodyMain">
                        <div className="bodyWrapper">
                            {/* Place Teacher Components here */}

                            {/* Look into Routers */}
                            {/* Look into Enum. Use Enums instead of 0s and 1s
                            OptionState.ProgressTracker... */}
                            {/* const DIRECTIONS = {​​​​​​​​ Up: 'up', Down: 'down', Left: 'left', Right: 'right', }​​​​​​​​ */}

                            {OptionState === 0 && TeacherLoggedIn && <ProgressTracker /> }
                            {OptionState === 1 && TeacherLoggedIn && <StudentProfiles /> }

                            {/* End of Teacher Components */}
                        </div>
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