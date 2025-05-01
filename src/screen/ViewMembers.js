import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import './ViewMembers.css';

const ViewMembers = () => {
  const [members, setMembers] = useState([]);
  const [error, setError] = useState(null); 
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/members'); 
        console.log('Fetched members:', response.data); 
        setMembers(response.data); 
      } catch (err) {
        console.error('Error fetching members:', err);
        setError('Error fetching members'); 
      }
    };

    fetchMembers();
  }, []); 

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
