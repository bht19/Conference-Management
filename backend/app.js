import React, { useState, useEffect } from 'react';

const ReviewersTable = () => {
  const [reviewers, setReviewers] = useState([]);

  useEffect(() => {
    // Fetch reviewers data from the server
    fetch('http://localhost:3000/reviewers')
      .then(response => response.json())
      .then(data => {
        setReviewers(data.data); // Assuming the data contains an array of reviewers
      })
      .catch(error => console.error('Error fetching reviewers:', error));
  }, []); // Run only once when component mounts

  return (
    <div>
      <h2>Reviewers</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Affiliation</th>
          </tr>
        </thead>
        <tbody>
          {reviewers.map(reviewer => (
            <tr key={reviewer._id}>
              <td>{reviewer.name}</td>
              <td>{reviewer.email}</td>
              <td>{reviewer.affiliation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewersTable;
