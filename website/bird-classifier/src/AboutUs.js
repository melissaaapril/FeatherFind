import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Navbar from './Components/Navbar.jsx';
import './Components/Navbar.css';
import './Components/Footer.css';
import Footer from './Components/Footer.jsx';

function AboutUs() {
    return(
        <> 
        {/*using react component for Navbar*/}
        <Navbar/>
        {/*creates the card object*/}
        <header>
            {/*just the company name on the banner*/} 
            <h1>Feather Find</h1>
        </header>

        <div className="main-content">
            <h1>Our Mission & Story</h1>
            <p>
                FeatherFind is dedicated to making bird identification and classification easier for bird enthusiasts and researchers alike. 
                With the help of AI-powered tools, we aim to provide an intuitive platform that fosters a connection with nature.
            </p>

            <div className="bird-illustrations">
                {/*Image sources: pexels.com. these are images in the about us*/}
                <img src="/Website/Images_web/AboutUs_Image1.jpg" alt="Bird Illustration 1"/>
                <img src="/Website/Images_web/AboutUs_image2.jpg" alt="Bird Illustration 2"/>
                <img src="/Website/Images_web/AboutUs_image3.jpg" alt="Bird Illustration 3"/>
            </div>

            <p>
                {/*the rest of the text that was broken off from images goes here */}
                We believe that by enhancing bird identification, we can help raise awareness for bird conservation and the beauty of our natural world.
            </p>
            </div>
            <div>
            <Footer/>
            </div>
        </>
        );  
    }
export default AboutUs;