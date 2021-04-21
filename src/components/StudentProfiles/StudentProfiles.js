import React, { useState, useEffect } from "react";
import './StudentProfiles.css';
import StudentProfileItem from './StudentProfileItem';

const StudentProfiles = (props) => {
    // let studentProfileArray = [];
    // let studentProfileJoin = [];
    // for (let i = 0; i < studentProfileArray.length; i++) {
    //     studentProfileJoin.push(<StudentProfileItem name='Default Name' key={i} />)
    // };

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
console.log(apiData[0].ProfilePic)
// let base64String = btoa(String.fromCharCode(...new Uint8Array(apiData[0].ProfilePic.data)));

    return (
      <div className="studentProfileContainer">
        
        {apiData.map((e) => 
        <StudentProfileItem 
        key={e.UserID}  
        studentName={`${e.FirstName} ${e.LastName}`} 
        image={`data:image/jpg;base64,${btoa(String.fromCharCode(...new Uint8Array(e.ProfilePic.data)))}`}
        // image={`data:image/jpg;base64,${btoa(String.fromCharCode(...new Uint8Array(apiData[0].ProfilePic.data)))}`}

        /> )}

      </div>
    )
}

export default StudentProfiles
