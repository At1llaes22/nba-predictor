import React from 'react';
import './HomePage.css';
import NavigationButton from './components/navigation_button';
import { GiBasketballJersey } from "react-icons/gi";


const HomePage = () => {
    const iconSize = 48;
    return (
        <div className='container'>
        
            <div className='topContainer'>
                <div className='logoContainer'>
                    <img src="https://picsum.photos/200/300" alt="ss" />
                </div>
                <div className='photoContainer'>
                    <img src="https://picsum.photos/200/300" alt="ss" />
                    <div className='textContainer'>
                        <h1>Welcome to My Homepage</h1>
                        <p>This is the homepage of my first React app.</p>
                    </div>
                </div>
                
            </div>
            <div className='navButtons'>
            <NavigationButton className="navbutton" text={"This page contains player stats info, click to continue."} title={"Player Stats"} path={"/player-stats"} OptionIcon={<GiBasketballJersey size={iconSize}/>}></NavigationButton>
            <NavigationButton className="navbutton" text={"test"} title={"This"} OptionIcon={<GiBasketballJersey size={iconSize}/>}></NavigationButton>
            <NavigationButton className="navbutton" text={"test"} title={"title"} OptionIcon={<GiBasketballJersey size={iconSize}/>}></NavigationButton>
            </div>
           
                
        </div>
        

       
    );
};

export default HomePage;
