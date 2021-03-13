import React from 'react';
import './StudentProfiles.css';
import TeacherProfile from '../img/teacherProfile.jpg';


const StudentProfiles = (props) => {
    return (
        <div>
            <div>
                <h1>Student Profile</h1>
            </div>

            <div className="studentProfileContainer">
                <div className="studentProfileItem">
                    <img src={TeacherProfile} alt="Profile Image" />
                    <p>Rawfiti Fletcher</p>
                </div>
            </div>
        </div>
    )
}

export default StudentProfiles
