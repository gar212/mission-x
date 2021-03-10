import React from 'react';
import './ProgressTracker.css';

function ProgressTracker() {
    return (
        <div>
            <h2>Beginner Course</h2>
            <h3>Export as Spreadsheet</h3>
            <div className="progressContainer">
                <div className="info">
                    <p className="infoName">Aiden Andrews</p>
                    <p>4/15 <span>Projects Completed</span></p>
                </div>
                <div className="circleProgress">
                    <div>1</div>
                </div>
            </div>
        </div>
    )
}

export default ProgressTracker;
