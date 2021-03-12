import React from 'react'
import './ProgressCircle.css';

const ProgressCircle = (props) => {
    return (
        <div>
            <div className="circleProgress">{props.courseNumber}</div>
        </div>
    )
}

export default ProgressCircle
