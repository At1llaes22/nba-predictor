import React from "react";
import "./navigation_button.css";

const NavigationButton = ({ title, text }) => {
    return (
        <div className="buttonContainer">
            <div className="iconContainer">
                
            </div>
            <div className="titleContainer">
                <h1>{title}</h1>
            </div>
            <div className="textContainer">
                <h2>{text}</h2>
            </div>

        </div>
    );
}

export default NavigationButton;
