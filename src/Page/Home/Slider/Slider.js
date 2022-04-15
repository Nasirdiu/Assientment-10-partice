import React from 'react';
import slider from '../../../images/bannerbackground.png'
import './Slider.css'
const Slider = () => {
    return (
        <div className='slider'>         
            <img className='img-fluid' src={slider}  alt=""  />    
        </div>
    );
};

export default Slider;