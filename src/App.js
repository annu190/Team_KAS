import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screen/Home';
import AddMember from './screen/AddMember';
import ViewMembers from './screen/ViewMembers';
import MemberDetails from './screen/MemberDetails';
import Navbar from './screen/Navbar'; // ✅ Import Navbar

const App = () => {
  return (
    <Router>
      <Navbar /> {/* ✅ Navbar rendered globally above all routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddMember />} />
        <Route path="/members" element={<ViewMembers />} />
        <Route path="/members/:id" element={<MemberDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
