import React, { useState, useEffect } from "react";
import './StudentHelpRequests.css';
import StudentHelpRequestItem from './StudentHelpRequestItem';

const StudentHelpRequests = (props) => {
    
 
    const [isLoading, setLoading] = useState(true);
    const [apiData, setApiData] = useState([]);


//using backend from studentprofiles as a place holder while sorting out helprequests backend

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
                <h2>Reply</h2>
                <h2>Mark as Done</h2>
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