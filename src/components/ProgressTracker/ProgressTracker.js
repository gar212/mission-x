import React, { useState, useEffect } from "react";
import ProgressStudent from './ProgressStudent';
import './ProgressTracker.css';
import FileExport from '../../img/FileExport.png';

function ProgressTracker() {
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

if(!isLoading){
    const b1 = apiData[0].ProjectDone.split(',').map(Number) ;
    console.log(apiData[5]);
}

const stringToArray = (string) => {
   return string.split(',').map(Number);
}

    return (
        <div className='progressContainer'>
            <div className="progressHeader">
                <h1>Beginner Course</h1>
                <h2><img className="fileExport" src={FileExport} alt="Export File" />Export as Spreadsheet</h2>
            </div>
            <div className="progressStudentContainer">
                {/* Maps the apiData array, passing in props into a component and returning it */}
                {isLoading ? `` : apiData.map((e) => 
                <ProgressStudent 
                key={e.UserID} 
                studentName={`${e.FirstName} ${e.LastName}`} 
                completed={e.ProjectDone} />)}
            </div>
        </div>
    )
}

export default ProgressTracker;