import React from 'react';
import './ProgressTracker.css';

function ProgressTracker() {
    return (
        
        <div className='progressContainer'>
            <div className="progressHeader">
                <h1>Beginner Course</h1>
                <h2><i className="fa fa-file-export"></i>Export as Spreadsheet</h2>
            </div>
            <div className="progressItem">
                <div className="info">
                    <p className="infoName">Aiden Andrews</p>
                    <p>4/15 <span>Projects Completed</span></p>
                </div>
                <div className="circleContainer">
                    {/* Remove once forEach is implemented. Right now used as placeholder */}
                    <div className="circleProgress">1</div>
                    <div className="circleProgress">2</div>
                    <div className="circleProgress">3</div>
                    <div className="circleProgress">4</div>
                    <div className="circleProgress">5</div>
                    <div className="circleProgress">6</div>
                    <div className="circleProgress">7</div>
                    <div className="circleProgress">8</div>
                    <div className="circleProgress">9</div>
                    <div className="circleProgress">10</div>
                    <div className="circleProgress">11</div>
                    <div className="circleProgress">12</div>
                    <div className="circleProgress">13</div>
                    <div className="circleProgress">14</div>
                    <div className="circleProgress">15</div>
                </div>
            </div>
        </div>
    )
}

export default ProgressTracker;
