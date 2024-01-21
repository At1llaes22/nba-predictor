import React from 'react';
import './HomePage.css';


const HomePage = () => {
    return (
        <div className='container'>
            <div className='topContainer'>
                <div className='logoContainer'>
                    <img src="https://picsum.photos/200/300"  />
                </div>
                <div className='photoContainer'>
                    <img src="https://picsum.photos/200/300"  />
                    <div className='textContainer'>
                        <h1>Welcome to My Homepage</h1>
                        <p>This is the homepage of my first React app.</p>
                    </div>
                </div>
            </div>
            
                
        </div>
        

       
    );
};

export default HomePage;
