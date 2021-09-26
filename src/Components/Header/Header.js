import React from 'react';
import logo from '../../Images/55.png';
import banner from '../../Images/5110077.png'
import './Header.css';

const Header = () => {
    return (
        <div className="header">
           <img src={logo} alt="" />
           
           <div>
               <h1 className="hero-2">Welcome To <br /> <span className="hero"><b>Graphic Designer Community</b></span></h1>
               <p><i><small>We’re on a mission to build the world’s best community for creatives to share, grow, and get hired.</small></i></p>
               <p><span className="hero-2">Total Budget:</span> <strong className="hero">150 Million</strong></p>
           </div>
           <img className="banner" src={banner} alt="" />
        </div>
    );
};

export default Header;