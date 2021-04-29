import React from "react";
import RectangleFrame from "../../img/ProfileStudent/RectangleFrame.png";
import StudentPic from "../../img/ProfileStudent/StudentPic.png";
import RectangleFrameLarge from "../../img/ProfileStudent/Rectangle 271.png";

function StudentInformation(props) {
  return (
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
            <p className="EditProfileButtonText ProfileButton">EDIT PROFILE</p>
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

          <p className="SIHText">
            {props.firstName} {props.lastName}
          </p>

          <div className="SICategory">
            <p className="SICText">School</p>
            <p className="SICText">Teacher</p>
            <p className="SICText">Course</p>
            <p className="SICText">Date of Birth</p>
            <p className="SICText">Contact No</p>
            <p className="SICText">Email Address</p>
          </div>
          <div className="SIData">
            <p className="SIDText">{props.school}</p>
            <p className="SIDText">Jasmina Salvador</p>
            <p className="SIDText">Beginner</p>
            <p className="SIDText">01 December 2002</p>
            <p className="SIDText">{props.contactNumber}</p>
            <p className="SIDText">{props.email}</p>
          </div>
        </div>
      </div>
      <div className="BackToProjects">
        <p>BACK TO PROJECTS</p>
      </div>
    </div>
  );
}

export default StudentInformation;
