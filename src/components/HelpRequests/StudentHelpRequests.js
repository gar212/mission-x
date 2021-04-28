import React, { useState, useEffect } from "react";
import './StudentHelpRequests.css';
import StudentHelpRequestItem from './StudentHelpRequestItem';

const StudentHelpRequests = (props) => {
    
 
    const [isLoading, setLoading] = useState(true);
    const [apiData, setApiData] = useState([]);


//using backend from studentprofiles as a place holder while sorting out helprequests backend

    useEffect(() => {
        async function fetchAPI() {
            let response = await fetch('/studentprofiles')
            response = await response.json()
            setApiData(response);
            setLoading(false);
        }
       fetchAPI()
    }, [])

  if (isLoading){
    return <div></div>;
  }
console.log(apiData[0].ProfilePic.data)

    
    return (

         <div className="studentHelpRequestContainer">
             <div className="StudentHelpRequestsHeader">
                <h1>Student Help Requests</h1>
                {/* Still have to add icons and get reply and mark as done on their own line */}
                <h2>Reply</h2>
                <h2>Mark as Done</h2>
            </div>
            {apiData.map((help) => 
        <StudentHelpRequestItem 
        key={help.UserID}  
        studentName={`${help.FirstName}`} 
        date={'${help.DateCreated}'}
        image={`data:image/jpg;base64,${btoa(String.fromCharCode(...new Uint8Array(help.ProfilePic.data)))}`}
        /> )}



      </div>
    )
}

export default StudentHelpRequests