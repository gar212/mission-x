import React, { useState, useEffect } from "react";
import './StudentProfiles.css';
import StudentProfileItem from './StudentProfileItem';

const StudentProfiles = (props) => {
    const [isLoading, setLoading] = useState(true);
    const [apiData, setApiData] = useState([]);

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

    return (
      <div className="studentProfileContainer">
        {apiData.map((e) => 
        <StudentProfileItem 
        key={e.UserID}  
        studentName={`${e.FirstName} ${e.LastName}`} 
        image={`data:image/jpg;base64,${btoa(String.fromCharCode(...new Uint8Array(e.ProfilePic.data)))}`}
        /> )}
      </div>
    )
}

export default StudentProfiles
