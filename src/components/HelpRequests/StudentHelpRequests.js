import React, { useState, useEffect } from "react";
import './StudentHelpRequests.css';
import StudentHelpRequestItem from './StudentHelpRequestItem';
import DoneIcon from "../../img/HelpRequests/Icon material-done.png";
import ReplyIcon from "../../img/HelpRequests/Icon material-reply.png";


const StudentHelpRequests = (props) => {
    
 
    const [isLoading, setLoading] = useState(true);
    const [apiData, setApiData] = useState([]);



    useEffect(() => {
        async function fetchAPI() {
            let response = await fetch('/helprequests')
            response = await response.json()
            setApiData(response);
            setLoading(false);
        }
       fetchAPI()
    }, [])

  if (isLoading){
    return <div></div>;
  }

    
    return (
         <div className="studentHelpRequestContainer">
             <div className="StudentHelpRequestsHeader">
                <h1>Student Help Requests</h1>
                {/* Still have to add icons and get reply and mark as done on their own line */}
                <h2><img src={ReplyIcon} align="left" hspace="10"/>Reply</h2>
                <h2><img src={DoneIcon} align="left" hspace="10" />Mark as Done</h2>
            </div>
            {apiData.map((e) => 
        <StudentHelpRequestItem 
        key={e.UserID}  
        studentName={`${e.FirstName} ${e.LastName}`} 
        date={e.date}
        time={e.time}
        image={`data:image/jpg;base64,${btoa(String.fromCharCode(...new Uint8Array(e.ProfilePic.data)))}`}
        /> )}



      </div>
    )
}



export default StudentHelpRequests