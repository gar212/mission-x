import React from 'react'
import TeacherProfile from '../../img/teacherProfile.jpg';
const StudentProfileItem = (props) => {
    return (
        <div className="studentProfileItem">
            <img src={TeacherProfile} alt="Profile" />
            <p>Aiden Andrews</p>
        </div>
    )
}

export default StudentProfileItem
