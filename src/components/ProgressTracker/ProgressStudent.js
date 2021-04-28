import React, { useState, useEffect } from "react";
import ProgressCircle from './ProgressCircle';
import './ProgressStudent.css';

const ProgressStudent = (props) => {

    const [isLoading, setLoading] = useState(true);
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        async function fetchAPI() {
            let response = await fetch('/progresstracker')
            response = await response.json()
            setApiData(response);
            setLoading(false);
        }
       fetchAPI()
    }, [])





    const progressCircleItems = [];
    // Change condition based on length. Apply when we implement back-end systems 
    for (let i = 1; i <= 15; i++){
        progressCircleItems.push(<ProgressCircle courseNumber={i} key={i}  />);
    }

    return (
        <div className="progressItem">
            <div className="info">
                <p className="infoName">{props.studentName}</p>
                <p className="infoAmount">{props.completed === null ? '0' : props.completed}/15 <span>Projects Completed</span></p>
            </div>
            <div className="circleContainer">
                {progressCircleItems}
            </div>
        </div>
    )
}

export default ProgressStudent
