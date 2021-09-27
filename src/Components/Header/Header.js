import React from 'react';
import logo from '../../Images/55.png';
import banner from '../../Images/5110077.png'
import './Header.css';

const Header = () => {
    return (
        <div className="header">
          <div> <img src={logo} alt="" /></div>
           <small id="logo-name"><i>Design Hub</i></small>
           <div>
               <h1 className="hero-2">Welcome To <br /> <span className="hero">Graphic Designer Community</span></h1>
               <p id="hero-p"><i><small>We’re on a mission to build the world’s best community for creatives to share, grow, and get hired.</small></i></p>
               <p><small id="budget">Total Budget: </small><strong className="hero">150 Million</strong></p>
           </div>
           <img className="banner" src={banner} alt="" />
        </div>
    );
};

export default Header;