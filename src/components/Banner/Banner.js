import React from 'react';
import './Banner.css'
import '../Header/Header.css';
import bannerImg from '../../images/bannerbackground.png'

const Banner = () => {
  return (
    <>
      <div className="banner-container">
        <img src={bannerImg} alt="banner" className='banner-img'/>
        <div className='content'>
        <h2 className='pb-3 text-center pt-3'><strong>Best Food Waiting For Your Belly</strong></h2>
        <div className="input-group mb-3">
          <input type="text" className="form-control left-pill" placeholder="Search food items" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
          <span className="btn btn-success input-group-text right-pill btn-custom" id="basic-addon2">Search</span>
        </div>
        </div> 
      </div>
    </>
  );
};

export default Banner;