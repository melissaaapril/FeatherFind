import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';  // Importing Footer component

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const birds = [
    { id: 1, name: 'Cardinal' },
    { id: 2, name: 'Blue Jay' },
    { id: 3, name: 'Hummingbird' },
    { id: 4, name: 'Eagle' },
    { id: 5, name: 'Sparrow' }
  ];

  const filteredBirds = birds.filter(bird =>
    bird.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Router>
      <Navbar />
      
      <div className="main-content">
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
      </div>

      {/* Footer placed here to ensure it's visible at the bottom */}
      <Footer />

      <Routes>
        <Route path="/bird/:id" element={<BirdDetail birds={birds} />} />
      </Routes>
    </Router>
  );
}

function BirdDetail({ birds }) {
  const birdId = window.location.pathname.split('/').pop();
  const bird = birds.find(b => b.id === Number(birdId));

  return (
    <div>
      {bird ? (
        <div>
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
