import React from 'react'
import ProgressCircle from './ProgressCircle';
import './ProgressStudent.css';

const ProgressStudent = (props) => {
    const progressCircleItems = [];
    // Change condition based on length. Apply when we implement back-end systems 
    for (let i = 1; i <= 15; i++){
        progressCircleItems.push(<ProgressCircle className="circleComplete" courseNumber={i} key={i}  />);
    }

    return (
        <div className="progressItem">
            <div className="info">
                <p className="infoName">{props.studentName}</p>
                <p className="infoAmount">{props.completed}/15 <span>Projects Completed</span></p>
            </div>
            <div className="circleContainer">
                {progressCircleItems}
            </div>
        </div>
    )
}

export default ProgressStudent
