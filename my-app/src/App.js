import React, { useState, useEffect } from 'react';
import './Navbar.css'; 

const ReviewersTable = () => {
  const [reviewers, setReviewers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3003/reviewers')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch reviewers');
        }
        return response.json();
      })
      .then(data => {
        setReviewers(data.data); 
      })
      .catch(error => console.error('Error fetching reviewers:', error));
  }, []); 
  
  return (
    <div className="table-container">
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
              <td data-label="Name">{reviewer.name}</td>
              <td data-label="Email">{reviewer.email}</td>
              <td data-label="Affiliation">{reviewer.affiliation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function App() {
  return (
    <div>
      <div className="navbar">
        <div className="logo-container">
          <img src="logo.png" className="logo" alt="Logo" />
          <p className="navbar-title">List of Reviewers</p>
        </div>
        <div className="navbar-links">
          <div className="navbar-link">
            Dashboard
          </div>
          <div className="dropdown">
            <div className="navbar-link">Profile ▼</div>
            <div className="dropdown-content">
              <button>My Account</button>
              <button>Signout</button>
            </div>
          </div>
        </div>
      </div>
      <h1>Conference Management System</h1>
      <ReviewersTable />
    </div>
  );
}

export default App;
