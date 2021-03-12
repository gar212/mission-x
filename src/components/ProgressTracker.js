import React from 'react';
import ProgressStudent from './ProgressTracker/ProgressStudent';
import './ProgressTracker.css';

function ProgressTracker() {
    return (
        <div className='progressContainer'>
            <div className="progressHeader">
                <h1>Beginner Course</h1>
                <h2><i className="fa fa-file-export"></i>Export as Spreadsheet</h2>
            </div>
            {/* Make properties dynamic once back-end is implemented */}
            <div className="progressStudentContainer">
                <ProgressStudent studentName="Aiden Andrews" completed="1" />
                <ProgressStudent studentName="Courtney Bristol" completed="3" />
                <ProgressStudent studentName="Courtney Bristol" completed="3" />
                <ProgressStudent studentName="Courtney Bristol" completed="3" />
                <ProgressStudent studentName="Courtney Bristol" completed="3" />
                <ProgressStudent studentName="Courtney Bristol" completed="3" />
            </div>
        </div>
    )
}

export default ProgressTracker;
