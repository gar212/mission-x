import React from "react";
import "./BackToTop.css";

function backToTop() {
  document.documentElement.scrollTop = 0;
}

function BackToTop() {
  return (
    <div id="BackToTop" onClick={backToTop}>
      <h1 id="BackToTopTxt">BACK TO TOP</h1>
    </div>
  );
}

export default BackToTop;
