import React from "react";
import "./ProfileStudent.css";
import TopNavBar from "../Components/TopNavBar.js";
import Footer from "../Components/Footer.js";
import RectangleFrame from "../Components/Images/RectangleFrame.png";
import StudentPic from "../Components/Images/StudentPic.png";
import EditProfileButton from "../Components/Images/EditProfileButton.png";
import ChangePhotoButton from "../Components/Images/ChangePhotoButton.png";
import RectangleFrameLarge from "../Components/Images/Rectangle 271.png";
import BackToProjects from "../Components/Images/BackToProjects.png";

function ProfileStudent() {
  return (
    <div>
      <TopNavBar />
      <div className="ProfileStudentLayout">
        <div className="StudentProfile">
          <div className="StudentProfileFrame">
            <img
              src={RectangleFrame}
              alt="Rectangle Frame"
              className="RectangleFrame"
            />

            <img src={StudentPic} alt="Student" className="StudentPic" />
            <img
              src={EditProfileButton}
              alt="Edit Profile Button"
              className="EditProfileButton"
            />
            <img
              src={ChangePhotoButton}
              alt="Change img Button"
              className="ChangePhotoButton"
            />
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
        <img
          src={BackToProjects}
          alt="Back to Projects"
          className="BackToProjects"
        />
      </div>
      <Footer />
    </div>
  );
}

export default ProfileStudent;
