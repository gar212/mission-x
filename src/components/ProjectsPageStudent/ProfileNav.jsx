import React from "react";
import "./ProfileNav.css";

function ProfileNav() {
  return (
    <div id="Popup">
      <div id="triangle"></div>
      <div id="square">
        <div className="MyProfile">
          <a href="http://localhost:3000/profilestudent">
            <h2 className="PopupOption">My Profile</h2>
          </a>
          <h2 className="PopupOption">Settings</h2>
          <a href="http://localhost:3000/">
            <h2 className="PopupOption">Log out</h2>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileNav;
