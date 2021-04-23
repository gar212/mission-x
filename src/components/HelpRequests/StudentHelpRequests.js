import React from 'react';
import './StudentHelpRequests.css';
import StudentHelpRequestItem from './StudentHelpRequestItem';

const StudentHelpRequests = (props) => {
    return (
         <div className="studentHelpRequestContainer">
             <div className="StudentHelpRequestsHeader">
                <h1>Student Help Requests</h1>
                {/* Still have to add icons and get reply and mark as done on their own line */}
                <h2>Reply</h2>
                <h2>Mark as Done</h2>
            </div>
                <StudentHelpRequestItem />
                <StudentHelpRequestItem />
                <StudentHelpRequestItem />
                <StudentHelpRequestItem />
                <StudentHelpRequestItem />


      </div>
    )
}

export default StudentHelpRequests