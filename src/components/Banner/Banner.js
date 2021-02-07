import React from 'react';
import './Banner.css'
import bannerImg from '../../images/bannerbackground.png'

const Banner = () => {
  return (
    <>
      <div className="banner-container">
        <img src={bannerImg} alt="banner"/>
        <div className='content'>
          <h2>hello world.</h2>
        </div> 
      </div>
    </>
  );
};

export default Banner;