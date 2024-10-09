import React from 'react';
import './Navbar.css';
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Merriweather&display=swap" rel="stylesheet"></link>

function Navbar(){
    return(
        <nav>
        <img src = "/logo_transparent.png" alt = "company logo"/>
        <p>FeatherFind By WingWise</p>
        <ul className = "nav_links">
            <li><a href = "/">Home</a> </li>
            <li><a href = "/">Browse</a> </li>
            <li><a href = "/">Login</a> </li>
            <li><a href = "/">Register Us</a> </li>
            <li><a href = "Website/bird-classifier/src/AboutUs.js">About Us</a> </li>
        </ul>
    </nav>
    );
}

export default Navbar;
