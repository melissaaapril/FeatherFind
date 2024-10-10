import React from 'react';
import { Link, useParams } from 'react-router-dom'; // Using useParams for cleaner URL parameter handling
import './BirdDetail.css'; // Import styles for this component

function BirdDetail({ birds }) {
  // useParams hook gets the dynamic parameter from the URL
  const { id } = useParams();

  // Find the bird that matches the ID
  const bird = birds.find(b => b.id === Number(id));

  return (
    <div className="bird-detail-container">
      {bird ? (
        <div className="bird-detail-content">
          <h2>{bird.name}</h2>
          <p>Details about the {bird.name}.</p>
          {/* Link to go back to the browse page */}
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

export default BirdDetail;
