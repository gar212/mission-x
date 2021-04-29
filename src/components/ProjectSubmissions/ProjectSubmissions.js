import React from 'react';
import './ProjectSubmissions.css';
import ProjectSubmissionItem from './ProjectSubmissionItem';


const ProjectSubmissions = (props) => {
    return (
         <div className="ProjectSubmissionsContainter">
           <div className="ProjectSubmissionsHeader">
            <h1>Project Submissions</h1>
            <h2>Download Files</h2>
            <h2>Mark as complete project</h2>
          </div>

            <ProjectSubmissionItem/>
            <ProjectSubmissionItem/>
            <ProjectSubmissionItem/>
            <ProjectSubmissionItem/>
            <ProjectSubmissionItem/>
            <ProjectSubmissionItem/>
            <ProjectSubmissionItem/>
            <ProjectSubmissionItem/>
            <ProjectSubmissionItem/>
            <ProjectSubmissionItem/>
            <ProjectSubmissionItem/>
            <ProjectSubmissionItem/>
            <ProjectSubmissionItem/>
            <ProjectSubmissionItem/>
            
          </div>



    )
}

export default ProjectSubmissions