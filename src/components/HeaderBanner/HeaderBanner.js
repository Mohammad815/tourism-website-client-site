import React from 'react';
import './HeaderBanner.css'
import img from '../../images/img7.jpg'


const HeaderBanner = () => {
    return (
        <div  className="banner1" style={{  
            backgroundImage: `url(${img})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }} >
            <div className="mt-5">
                <h2>Lifelong Memories Just a few Seconds away</h2>
                <p>Lets start Your Journey with us, your Dream will come true.</p>
            </div>
        </div>
    );
};

export default HeaderBanner;