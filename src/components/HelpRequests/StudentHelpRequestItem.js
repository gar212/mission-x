import React from 'react'
import TeacherProfile from '../../img/teacherProfile.jpg';
import './StudentHelpRequestItem.css';

const StudentHelpRequestItem = (props) => {
    return (
        <div className="CheckboxDiv">
            <input type="Checkbox"></input>
            <div className="StudentHelpRequestItem">
                {/* Just a place holder image atm will be dynamic once updated */}
                <img src={TeacherProfile} alt="Profile" />
                
                {/* Will update student name and timestamp once we learn more about backend */}
                <p className="StudentHelpText">StudentName needs help with his project</p>
                <ul className="TimeStamp">
                    <li>Date</li>
                    <li>Time</li>
                </ul>
            </div>
        </div>
    )
}

export default StudentHelpRequestItem
