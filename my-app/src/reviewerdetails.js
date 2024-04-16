// ReviewerDetails.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get route parameters
import './Navbar.css'; // Import CSS file here

const ReviewerDetails = () => {
  const { id } = useParams(); // Get the _id parameter from the route
  const [reviewer, setReviewer] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3004/reviewers/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch reviewer details');
        }
        return response.json();
      })
      .then(data => {
        setReviewer(data.data);
      })
      .catch(error => console.error('Error fetching reviewer details:', error));
  }, [id]);

  return (
    <div>
      <h2>Reviewer Details</h2>
      {reviewer ? (
        <div>
          <p>Name: {reviewer.name}</p>
          <p>Email: {reviewer.email}</p>
          <p>Qualification: {reviewer.qualification}</p>
          {/* Add other details */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ReviewerDetails;
