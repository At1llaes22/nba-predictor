import React from 'react';
import './HomePage.css';
import NavigationButton from './components/navigation_button';


const HomePage = () => {
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
            <NavigationButton className="navbutton" text={"test"} title={"title"}></NavigationButton>
                
        </div>
        

       
    );
};

export default HomePage;
