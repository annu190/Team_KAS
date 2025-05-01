import React, { useState } from 'react';
import axios from 'axios';
import './AddMember.css';

const AddMember = () => {
  const [formData, setFormData] = useState({
    name: '',
    rollno: '',
    year: '',
    degree: '',
    project: '',
    hobbies: '',
    cert: '',
    internship: '',
    aim: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }

    try {
      await axios.post('http://localhost:5000/api/members', data); // <-- update here
      alert('Member added successfully!');
    } catch (err) {
      console.error(err);
      alert('Error adding member.');
    }
  };

  return (
    <div className="form-container">
      <h2>Add New Team Member</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="text" name="rollno" placeholder="Roll No." onChange={handleChange} required />
        <input type="text" name="year" placeholder="Year" onChange={handleChange} required />
        <input type="text" name="degree" placeholder="Degree" onChange={handleChange} required />
        <textarea name="project" placeholder="About Project" onChange={handleChange} required />
        <textarea name="hobbies" placeholder="Hobbies" onChange={handleChange} required />
        <textarea name="cert" placeholder="Certifications" onChange={handleChange} required />
        <textarea name="internship" placeholder="Internship Experience" onChange={handleChange} required />
        <textarea name="aim" placeholder="About Your Aim" onChange={handleChange} required />
        
        <label className="file-label">Upload Image:
          <input type="file" name="image" accept="image/*" onChange={handleChange} required />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddMember;
