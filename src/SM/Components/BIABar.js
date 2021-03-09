import React from 'react';
import "./BIABar.css"
import Beginner from "./Images/BEGINNER.png";
import Intermediate from "./Images/INTERMEDIATE.png";
import Advanced from "./Images/ADVANCED.png";
import MenuSeperator from "./Images/Menus - Separator - Aqua.png";
import BlueRect from "./Images/Rectangle 228.png";
import Button from "./Images/Button.png";
import SegmentedControl from "./Images/Segmented Control - 3 Text Items.png";

// eslint-disable-next-line
{/*BIA - Beginner, Intermediate, Advanced */}


function BIABar () {
    
    return (
        <div className = "BIABar">
            <img src = {Button} alt = "Button" className = "Button"/>
            <img src = {BlueRect} alt = "Beginner Background" className = "BeginnerBackground"/>
            <img src = {Beginner} alt = "Beginner Text" className= "BeginnerText"/>           
            <img src = {Intermediate} alt = "Intermediate Text" className = "IntermediateText"/>
            <img src = {MenuSeperator} alt = "|" className="MenuSeperator"/>
            <img src = {Advanced} alt = "Advanced Text" className = "AdvancedText"/>
            <p className = "ShowText">SHOW</p>
            <img src = {SegmentedControl} alt = "Segmented Control" className = "SegmentedControl"/>
        </div>
    )
}

export default BIABar;