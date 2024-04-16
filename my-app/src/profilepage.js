import React, { useState, useEffect } from 'react';

const ProfilePage = ({ match }) => {
  const [reviewer, setReviewer] = useState(null);

  useEffect(() => {
    const fetchReviewer = async () => {
      try {
        const response = await fetch(`http://localhost:3003/reviewers/${match.params.id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch reviewer');
        }
        const data = await response.json();
        setReviewer(data.data);
      } catch (error) {
        console.error('Error fetching reviewer:', error);
      }
    };

    fetchReviewer();
  }, [match.params.id]);

  if (!reviewer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{reviewer.name}'s Profile</h2>
      <img src={reviewer.profilePicture} alt={reviewer.name} />
      <p>Email: {reviewer.email}</p>
      <p>Affiliation: {reviewer.affiliation}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ProfilePage;
