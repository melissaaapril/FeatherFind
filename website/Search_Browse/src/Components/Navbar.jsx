import React from 'react';
import './Navbar.css';

function Navbar(){
    return(
        <nav>
        <img src = "logo_transparent.png" alt = "company logo"/>
        <p>By WingWise</p>
        <ul class = "nav_links">
            <li><a href = "#">Home</a> </li>
            <li><a href = "#">Browse</a> </li>
            <li><a href = "#">Login</a> </li>
            <li><a href = "#">Register Us</a> </li>
            <li><a href = "#">About Us</a> </li>
        </ul>
    </nav>
    );
}

export default Navbar;