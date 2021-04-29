import React from 'react'
import TeacherProfile from '../../img/teacherProfile.jpg';
import './StudentHelpRequestItem.css';

const StudentHelpRequestItem = (props) => {
    return (
        <div className="CheckboxDiv">
            <input type="Checkbox"></input>
            <div className="StudentHelpRequestItem">
                {/* Just a place holder image atm will be dynamic once updated */}
                <img src={props.image} alt="Profile" />
                
                {/* Will update student name and timestamp once we learn more about backend */}
                <p className="StudentHelpText">{props.studentName} needs help with their project</p>
                {/* TimeStamp Hardcoded till I get it to work with backend */}
                <ul className="TimeStamp">
                    <li>{props.date}</li>
                    <li>{props.time}</li>
                </ul>
            </div>
        </div>
    )
}

export default StudentHelpRequestItem
