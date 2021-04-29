import React, {useState, useEffect} from "react";
import "./ProfileStudent.css";
import TopNav from "../TopNav/TopNav";
import Footer from "../Footer/Footer";
import StudentInformation from "./StudentInformation";

function ProfileStudent(props) {
  const [isLoading, setLoading] = useState(true);
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      let response = await fetch("/studentprofiles");
      response = await response.json();
      setApiData(response);
      setLoading(false);
    }
    fetchAPI();
  }, []);

  console.log(apiData);

  if (isLoading) {
    return <div></div>;
  }

  return (
    <div>
      <TopNav />
      <StudentInformation
        key={apiData[3].UserID}
        firstName={apiData[3].FirstName}
        lastName={apiData[3].LastName}
        school={apiData[3].School}
        dOB={apiData[3].date}
        contactNumber={apiData[3].ContactNumber}
        email={apiData[3].Email}
      />

      <Footer />
    </div>
  );
}

export default ProfileStudent;
