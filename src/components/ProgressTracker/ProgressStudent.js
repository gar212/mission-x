import React from "react";
import ProgressCircle from './ProgressCircle';
import './ProgressStudent.css';

const ProgressStudent = (props) => {
    // Convert string to an array. Removes ',' from string
    const stringToArray = string => props.completed !== null ? props.completed.split(',').map(Number) : null;

    // Returns boolean if array of completedCourses contains number
    const isDone = courseNo => {
        if (props.completed !== null) {
            let arr = stringToArray(props.completed);
            let findArr = arr.find(number => number === courseNo);
            if (findArr === courseNo) return true;
        }
    }

    // Iterates 15 times and stores it into progressCircleItems
    const progressCircleItems = [];
    for (let i = 1; i <= 15; i++){
        progressCircleItems.push(<ProgressCircle done={isDone(i)} courseNumber={i} key={i}  />);
    }

    return (
        <div className="progressItem">
            <div className="info">
                <p className="infoName">{props.studentName}</p>
                <p className="infoAmount">{props.completed === null ? '0' : stringToArray(props.completed).length}/15 <span>Projects Completed</span></p>
            </div>
            <div className="circleContainer">
                {progressCircleItems}
            </div>
        </div>
    )
}

export default ProgressStudent
