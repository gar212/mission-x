import React from 'react';
// import { Link } from 'react-router-dom';
import './TeacherDashboard.css';
import LogoBlue from '../img/LogoBlue.jpg';
import MaoriFlag from '../img/MaoriFlag.jpg';
import NZFlag from '../img/NZFlag.jpg';

import SideNav from './SideNav';

// const images1 = require.context('../img', true, /\.(png|jpe?g|svg)$/);

const TeacherDashboard = (props) => {
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
                <SideNav />       
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