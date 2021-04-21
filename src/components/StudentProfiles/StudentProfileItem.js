import React from 'react'

const StudentProfileItem = (props) => {
    return (
        <div className="studentProfileItem">
            <img src={props.image} alt="Profile" />
            <p>{props.studentName}</p>
        </div>
    )
}

export default StudentProfileItem
