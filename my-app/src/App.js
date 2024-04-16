import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Import CSS file here

const ReviewersTable = () => {
  const [reviewers, setReviewers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3004/reviewers')
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
    <div>
      <h2>Reviewers</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>qualification</th>
            <th>paperassigned</th>
            <th>university</th>
            <th>address</th>
            <th>contact</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {reviewers.map(reviewer => (
            <tr key={reviewer._id}>
              <td data-label="Name"><a href={`http://localhost:3004/reviewers/${reviewer._id}`}>{reviewer.name}</a></td>
              <td data-label="Email">{reviewer.email}</td>
              <td data-label="qualification">{reviewer.qualification}</td>
              <td data-label="paperassigned">{reviewer.papersAssigned}</td>
              <td data-label="university">{reviewer.university}</td>
              <td data-label="address">{reviewer.address}</td>
              <td data-label="contact">{reviewer.contact}</td>
              <td data-label="email">{reviewer.email}</td>
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
          <p className="navbar-title">Conference Management </p>
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
      <h1>List of Reviewers</h1>
    </div>
  );
}

export default App;
