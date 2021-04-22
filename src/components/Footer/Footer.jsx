import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="FooterFormat">
      <div className="Company">
        <div className="FooterHeading">
          <p>COMPANY</p>
        </div>
        <div className="FooterText">
          <p>About Us</p>
          <p>Careers</p>
          <p>Partners</p>
        </div>
      </div>
      <div className="Courses">
        <div className="FooterHeading">
          <p>COURSES</p>
        </div>
        <div className="FooterText">
          <p>Register</p>
          <p>Login</p>
          <p>Projects</p>
          <p>Teachers</p>
          <p>Parents</p>
          <p>Resources</p>
        </div>
      </div>
      <div className="Support">
        <div className="FooterHeading">
          <p>SUPPORT</p>
        </div>
        <div className="FooterText">
          <p>FAQs</p>
          <p>Helpdesk</p>
          <p>Contact Us</p>
        </div>
      </div>
      <div className="Legal">
        <div className="FooterHeading">
          <p>LEGAL</p>
        </div>
        <div className="FooterText">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p></p>
        </div>
      </div>
      <div className="LevelUpWorks">
        <div className="FooterHeading">
          <div>LevelUpWorks</div>
          <div className="FooterText LevelUpMargin">
            <p>
              LevelUp Works is an Auckland-based <br />
              enterprise dedicated to developing game- <br />
              based learning software to help teachers in <br />
              response to the New Zealand Digital <br />
              Technologies & Hangarau Matihiko. <br />
              alan@levelupworks.com <br />
              (021) 668 185
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
