import React, {useState, useEffect} from "react";
import "./ProfileStudent.css";
import TopNav from "../TopNav/TopNav";
import RectangleFrame from "../../img/ProfileStudent/RectangleFrame.png";
import StudentPic from "../../img/ProfileStudent/StudentPic.png";
import RectangleFrameLarge from "../../img/ProfileStudent/Rectangle 271.png";
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

  console.log(apiData[3]);

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
        dOB={apiData[3].DateOfBirth}
        contactNumber={apiData[3].ContactNumber}
        email={apiData[3].Email}
      />

      <div className="ProfileStudentLayout">
        <div className="StudentProfile">
          <div className="StudentProfileFrame">
            <img
              src={RectangleFrame}
              alt="Rectangle Frame"
              className="RectangleFrame"
            />

            <img src={StudentPic} alt="Student" className="StudentPic" />

            <div>
              <p className="EditProfileButtonText ProfileButton">
                EDIT PROFILE
              </p>
            </div>

            <div>
              <p className="ChangePhotoButton ProfileButton">CHANGE PHOTO</p>
            </div>
          </div>
        </div>
        <div className="StudentInformation">
          <div className="StudentInformationPreview">
            <img
              src={RectangleFrameLarge}
              alt="Rectangle"
              className="RectangleFrameLarge"
            />

            <p className="SIHText">Rawiri Fletcher</p>

            <div className="SICategory">
              <p className="SICText">School</p>
              <p className="SICText">Teacher</p>
              <p className="SICText">Course</p>
              <p className="SICText">Date of Birth</p>
              <p className="SICText">Contact No</p>
              <p className="SICText">Email Address</p>
            </div>
            <div className="SIData">
              <p className="SIDText">Homai School</p>
              <p className="SIDText">Jasmina Salvador</p>
              <p className="SIDText">Beginner</p>
              <p className="SIDText">25 June 2010</p>
              <p className="SIDText">022 524 63 99</p>
              <p className="SIDText">fletchy.r@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="BackToProjects">
          <p>BACK TO PROJECTS</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProfileStudent;
