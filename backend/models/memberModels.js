const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Member = require('../models/memberModels');

// Multer storage setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, uniqueSuffix);
  }
});
const upload = multer({ storage });

// Add a new member (POST /api/members)
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const {
      name, rollno, year, degree, project,
      hobbies, cert, internship, aim
    } = req.body;

    const image = req.file ? req.file.filename : '';

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

    const savedMember = await newMember.save();
    res.status(201).json(savedMember);
  } catch (error) {
    console.error('Error adding member:', error.message);
    res.status(500).json({ error: 'Failed to add member' });
  }
});

// Get member by ID (GET /api/members/:id)
router.get('/:id', async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);

    if (!member) {
      return res.status(404).json({ message: 'Member not found' });
    }

    // Send full image URL
    const imageUrl = member.image ? `/uploads/${member.image}` : null;

    res.status(200).json({
      ...member._doc,
      image: imageUrl,
    });
  } catch (error) {
    console.error('Error fetching member details:', error.message);
    res.status(500).json({ error: 'Failed to fetch member' });
  }
});

module.exports = router;
