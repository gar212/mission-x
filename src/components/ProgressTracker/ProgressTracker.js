import React from 'react';
import ProgressStudent from './ProgressStudent';
import './ProgressTracker.css';
import FileExport from '../../img/FileExport.png';

function ProgressTracker() {
    return (
        <div className='progressContainer'>
            <div className="progressHeader">
                <h1>Beginner Course</h1>
                <h2><img className="fileExport" src={FileExport} alt="Export File"/>Export as Spreadsheet</h2>
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
