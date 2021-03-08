import React from 'react';
import "./BIABar.css"
import Beginner from "./Images/BEGINNER.png";
import Intermediate from "./Images/INTERMEDIATE.png";
import Advanced from "./Images/ADVANCED.png";
import MenuSeperator from "./Images/Menus - Separator - Aqua.png";
import BlueRect from "./Images/Rectangle 228.png";

// eslint-disable-next-line
{/*BIA - Beginner, Intermediate, Advanced */}


function BIABar () {
    
    return (
        <div className = "BIABar">
            <img src = {BlueRect} alt = "Beginner Background"/>
            <img src = {Beginner} alt = "Beginner Text"/>
            <img src = {Intermediate} alt = "Intermediate Text"/>
            <img src = {MenuSeperator} alt = "|"/>
            <img src = {Advanced} alt = "Advanced Text"/>

        </div>
    )
}

export default BIABar;