import React from 'react'
import './ProjectSubmissionItem.css';
import zoom from "../../img/ProjectSubmissions/Icon material-zoom-in.png";

const ProjectSubmissionItem = (props) => {
    return (
        <div className="ProjectSubmissionItem">
            {/* Just a place holder image atm will be dynamic once updated */}
            <div className="ProfilePic">
            <img src={props.image} alt="Profile" />
            </div>
            <div className="Submit">
            {/* Will update student name and timestamp once we learn more about backend */}
            <p className="StudentHelpText">{props.studentName} submitted their project</p>
            <img id="Project" src="http://levels.levelupworks.com/wp-content/uploads/2019/09/image-67.png"></img>
            <div className="EnlargePhotoContainer">
            <a href="http://levels.levelupworks.com/wp-content/uploads/2019/09/image-67.png" target="_blank">
            <p><img className="ZoomImage" src={zoom} align="left" />ENLARGE PHOTO</p>
            </a>
            </div>
            </div>
            <ul className="TimeStamp">
                <li>{props.date}</li>
                <li>{props.time}</li>
            </ul>

        </div>
    )
}

export default ProjectSubmissionItem
