// screens/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const HomePage = () => {
  const backgroundStyle = {
    backgroundImage: "url('/images/top2.png')", // path from public folder
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '75vh',
    color: 'white',
    textAlign: 'center',
    paddingTop: '150px',
  };

  return (
    <div style={backgroundStyle}>
      <h1 className="home-header" style={{ color: 'black' }}>
        Welcome to Team KAS
      </h1>
      <h2 className="home-subtext">
        A place to manage and organize your team members easily and efficiently.
      </h2>
      <div className="home-buttons">
        <Link to="/add"><button>Add Member</button></Link>
        <Link to="/members"><button>View Members</button></Link>
      </div>
    </div>
  );
};

export default HomePage;
