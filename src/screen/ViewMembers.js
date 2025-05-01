import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link to navigate to individual member's detail
import './ViewMembers.css';

const ViewMembers = () => {
  const [members, setMembers] = useState([]);
  const [error, setError] = useState(null); // For error handling

  // Fetch all members from the backend
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/members'); // Ensure correct URL
        console.log('Fetched members:', response.data); // Log the response for debugging
        setMembers(response.data); // Store fetched data in state
      } catch (err) {
        console.error('Error fetching members:', err);
        setError('Error fetching members'); // Set error message if API call fails
      }
    };

    fetchMembers();
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  return (
    <div className="members-container">
      <h2>Meet Our Team</h2>
      {error && <p>{error}</p>} {/* Display error message if there is one */}
      <div className="members-list">
        {members.length === 0 ? (
          <p>No team members found</p>
        ) : (
          members.map((member) => (
            <div className="member-card" key={member._id}>
              <img
                src={`http://localhost:5000/uploads/${member.image}`} // Image path
                alt={member.name}
                className="member-image"
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <Link to={`/members/${member._id}`} className="view-details">
                View Details
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ViewMembers;
