const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Member = require('../models/memberModels'); // Adjust the path as needed

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Save the image with a unique filename
  }
});

const upload = multer({ storage: storage });

// POST /members (Add a new member)
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { name, rollno, year, degree, project, hobbies, cert, internship, aim } = req.body;
    const image = req.file ? req.file.filename : ''; // Get the image filename

    const newMember = new Member({
      name,
      rollno,
      year,
      degree,
      project,
      hobbies,
      cert,
      internship,
      aim,
      image,
    });

    await newMember.save();
    res.status(201).json({ message: 'Member added successfully', newMember });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /members/rollno/:rollno (Fetch member details by Roll No)
router.get('/rollno/:rollno', async (req, res) => {
  try {
    const rollno = req.params.rollno;
    const member = await Member.findOne({ rollno });

    if (!member) {
      return res.status(404).json({ message: 'Member not found' });
    }

    // If the member has an image, send the full path
    const imageUrl = member.image ? `/uploads/${member.image}` : null;

    res.status(200).json({
      ...member._doc,
      image: imageUrl, // Ensure correct image path
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
