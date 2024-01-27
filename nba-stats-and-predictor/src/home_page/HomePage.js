import React from 'react';
import './HomePage.css';
import NavigationButton from './components/navigation_button';

import logo from '../assets/Logo-NBA.png';
import logo2 from '../assets/wade-bron.jpg';
import playerLogo from '../assets/player-stats-logo.jpg';
import teamsLogo from '../assets/nba-teams-logo.jpg';
import upcomingLogo from '../assets/upcoming-games-logo.avif';


const HomePage = () => {
    
    return (
        <div className='container'>

            <div className='topContainer'>
                <div className='logoContainer'>
                    <img src={logo} alt="ss" />
                </div>
                <div className='photoContainer'>
                    <img src={logo2} alt="ss" />
                    <div className='textContainer'>
                        <h1>Welcome to My Homepage</h1>
                        <p>This is the homepage of my first React app.</p>
                    </div>
                </div>
                
            </div>
            <div className="bottomContainer">
                <div className='navButtons'>
                    <NavigationButton className="navbutton" text={"This page contains player stats info, click to continue."} title={"Player Stats"} path={"/player-stats"} OptionIcon={playerLogo}></NavigationButton>
                    <NavigationButton className="navbutton" text={"This page contains team stats info, click to continue."} title={"Team Stats"} OptionIcon={teamsLogo}></NavigationButton>
                    <NavigationButton className="navbutton" text={"This page contains upcoming games info, click to continue."} title={"Upcoming Games"} OptionIcon={upcomingLogo}></NavigationButton>
                </div>
            </div>
           
           
                
        </div>
        

       
    );
};

export default HomePage;
