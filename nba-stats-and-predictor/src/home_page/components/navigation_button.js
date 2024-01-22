import React from "react";
import "./navigation_button.css";
import { useNavigate } from 'react-router-dom';
import "../HomePage.css";
    



const NavigationButton = ({ title, text, OptionIcon, path }) => {
    const navigate = useNavigate();
    
    return (
        <div className="buttonContainer" onClick={() => navigate(path)}>
        
            <div className="iconContainer">
           {OptionIcon}

            </div>
            <div className="textparent">
            <div className="titleContainer">
                <h3>{title}</h3>
            </div>
            <div className="textContainer">
                <h4>{text}</h4>
            </div>
            </div>
            

        </div>
    );
}

export default NavigationButton;
