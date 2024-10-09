import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './App.css';
import Navbar from './Components/Navbar.jsx';
import './Components/Navbar.css';
import Footer from './Components/Footer.jsx';
import './Components/Footer.css';

//lets ste up the main drag and drop function
function DragDropImageUploader () {
    const [uploadedFile, setUploadedFile] = useState(null);

    //we will callback when a file is dropped
    const onDrop = (acceptedFiles) => { 
        //error handling to only take the first file
        const file = acceptedFiles[0];
        //read in file/}
        const reader = new FileReader();
        reader.onloadend = () => {
            setUploadedFile(reader.result);
        };
        reader.readAsDataURL(file); // convert image to base64
    };
    //using drop zone from react/}
    const { getRootProps, getInputProps} = useDropzone({
        onDrop,
        //only accept images
        accept: 'image/',
        multiple: false,
});

return(
  <> 
    {/*using react component for Navbar*/}
    <Navbar/>
    {/*creates the card object*/}
    <div className = 'card'>
      <div className = 'top'>
        {/*text that is inside on the top of the box*/}
        <h1>Get Started</h1>
        <p>1.Upload an image of a bird you wish to identify</p>
        <p>2.Wait for the AI to identify the bird for you</p>
        <img 
          src = "/logo_transparent.png" 
          alt = "company logo" 
          style={{ width: '300px' }}
        />

        </div>
        {/* drag and drop area */}
        <div {...getRootProps()} className="drag-area">
          <input {...getInputProps()} />
            {/*text that is inside the actual box*/}
            <p>drag & drop image OR click to select files</p>
        </div>
        {uploadedFile && (
          <div className="container">
            <img src={uploadedFile} alt="Uploaded" style={{ width: '200px' }} />
          </div>
        )}
      </div>
      <div>
      <Footer/>
      </div>
     </>
  );
}

export default DragDropImageUploader;
