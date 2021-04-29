import React, { useState, useEffect } from "react";
import './ProjectSubmissions.css';
import ProjectSubmissionItem from './ProjectSubmissionItem';


const ProjectSubmissions = (props) => {

  const [isLoading, setLoading] = useState(true);
  const [apiData, setApiData] = useState([]);


//using backend from studentprofiles as a place holder while sorting out helprequests backend

  useEffect(() => {
      async function fetchAPI() {
          let response = await fetch('/projectsubmissions')
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
         <div className="ProjectSubmissionsContainter">
           <div className="ProjectSubmissionsHeader">
            <h1>Project Submissions</h1>
            <h2>Download Files</h2>
            <h2>Mark as complete project</h2>
          </div>
          {apiData.map((e) => 
        <ProjectSubmissionItem 
        key={e.UserID}  
        studentName={`${e.FirstName} ${e.LastName}`} 
        date={e.date}
        time={e.time}
        image={`data:image/jpg;base64,${btoa(String.fromCharCode(...new Uint8Array(e.ProfilePic.data)))}`}
        Submittedimage={"https://australiaeast1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Fmreadyhq.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!wWG7itqgskGEksBn-lKqda1BV6jgXIdLpu7sgaRHbn2N2jc-zqHMSrLa8dxtEOSC%2Fitems%2F01Y32P6CBNLW3242YSBZGLCP6BUTBZNBMF%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvbXJlYWR5aHEuc2hhcmVwb2ludC5jb21AOTQ5NTdmYjAtMzE3ZC00MDQ4LTg2MWMtNWFjMTQ2NjNiN2U4IiwiaXNzIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoiMTYxOTY2NTIwMCIsImV4cCI6IjE2MTk2ODY4MDAiLCJlbmRwb2ludHVybCI6ImJ2NXhNWGlscjMwbGdIaUVQaHhGUUdyRmc2U3B6NU9nYTJtaVNlMTAxMkU9IiwiZW5kcG9pbnR1cmxMZW5ndGgiOiIxMTUiLCJpc2xvb3BiYWNrIjoiVHJ1ZSIsInZlciI6Imhhc2hlZHByb29mdG9rZW4iLCJzaXRlaWQiOiJPR0ZpWWpZeFl6RXRZVEJrWVMwME1XSXlMVGcwT1RJdFl6QTJOMlpoTlRKaFlUYzEiLCJzaWduaW5fc3RhdGUiOiJbXCJrbXNpXCJdIiwibmFtZWlkIjoiMCMuZnxtZW1iZXJzaGlwfHNhbW1AbWlzc2lvbnJlYWR5aHEuY29tIiwibmlpIjoibWljcm9zb2Z0LnNoYXJlcG9pbnQiLCJpc3VzZXIiOiJ0cnVlIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDEwNWY5NTgxZUBsaXZlLmNvbSIsImFjcnMiOiJyMSxyMixyMyxjMSxjMixjMyIsInR0IjoiMCIsInVzZVBlcnNpc3RlbnRDb29raWUiOiIzIn0.MnovUVNFMlhXOFAwTWVPY0hjT3pFRFlnd041UDUrRUt5Y2RhdWpnQWhqQT0&encodeFailures=1&width=329&height=236&srcWidth=329&srcHeight=236"}
        
        /> )}

          </div>



    )
}

export default ProjectSubmissions