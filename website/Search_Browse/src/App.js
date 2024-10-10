import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './Components/Navbar'; // Import Navbar component
import Footer from './Components/Footer'; // Import Footer component
import BirdDetail from './Components/BirdDetail'; // Import the new BirdDetail component
import './App.css'; // Import the main CSS file

function App() {
  //useState hook to manage search input
  const [searchTerm, setSearchTerm] = useState('');

  //Temp array, we can replace with firebase later
  const birds = [
    { id: 1, name: 'Cardinal' },
    { id: 2, name: 'Blue Jay' },
    { id: 3, name: 'Hummingbird' },
    { id: 4, name: 'Eagle' },
    { id: 5, name: 'Sparrow' }
  ];

  //
  const filteredBirds = birds.filter(bird =>
    bird.name.toLowerCase().includes(searchTerm.toLowerCase()) //Converts to lowercase for case sentisive search
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
            {/* Use the BirdDetail component in the route */}
            <Route path="/bird/:id" element={<BirdDetail birds={birds} />} />
          </Routes>
        </div>
        <Footer /> {/* Footer stays at the bottom */}
      </div>
    </Router>
  );
}

export default App;
