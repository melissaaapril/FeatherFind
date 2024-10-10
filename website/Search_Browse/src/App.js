import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './Components/Navbar'; //Importing Nav 
import Footer from './Components/Footer'; //Importing Footer
import './App.css'; //Importing CSS file

function App() {
  //Manages the search input from user
  const [searchTerm, setSearchTerm] = useState('');

  //Temp Database, We can replace with Firebase later on
  const birds = [
    { id: 1, name: 'Cardinal' },
    { id: 2, name: 'Blue Jay' },
    { id: 3, name: 'Hummingbird' },
    { id: 4, name: 'Eagle' },
    { id: 5, name: 'Sparrow' }
  ];

  //Filters birds based on user input entered earlier
  const filteredBirds = birds.filter(bird =>
    bird.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Router>
      <div className="page-container">
        <Navbar />
        <div className="content-wrap">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="search-bar-container">
                    <input
                      type="text"
                      placeholder="Search for a bird..."
                      value={searchTerm}
                      onChange={e => setSearchTerm(e.target.value)}
                      className="search-input"
                    />
                  </div>

                  <div className="grid-container">
                    {filteredBirds.length > 0 ? (
                      filteredBirds.map(bird => (
                        <div key={bird.id} className="grid-item">
                          <Link to={`/bird/${bird.id}`} className="bird-link">
                            {bird.name}
                          </Link>
                        </div>
                      ))
                    ) : (
                      <div>No birds found</div>
                    )}
                  </div>
                </>
              }
            />
            <Route path="/bird/:id" element={<BirdDetail birds={birds} />} />
          </Routes>
        </div>
        <Footer /> {/* Footer stays at the bottom */}
      </div>
    </Router>
  );
}


//Calls Specific details about a selected bird. *Should probably make this a component for easier use?*
function BirdDetail({ birds }) {
  //Grabs bird ID and adds to URL path
  const birdId = window.location.pathname.split('/').pop();
  //Finds object to match the ID
  const bird = birds.find(b => b.id === Number(birdId));

  return (
    <div className="bird-detail-container">
      {bird ? (
        <div className="bird-detail-content">
          <h2>{bird.name}</h2>
          <p>Details about the {bird.name}.</p>
          <Link to="/" className="back-link">
            <button>Go Back to Browse</button>
          </Link>
        </div>
      ) : (
        <div>Bird not found.</div>
      )}
    </div>
  );
}

export default App;
