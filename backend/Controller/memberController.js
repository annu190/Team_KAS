const Member = require('../models/memberModels');

const addMember = async (req, res) => {
  const {
    name,
    rollno,
    year,
    degree,
    aboutProject,
    hobbies,
    cert,
    internship,
    aim,
  } = req.body;

  try {
    const newMember = new Member({
      name,
      rollno,
      year,
      degree,
      aboutProject,
      hobbies,
      cert,
      internship,
      aim,
      image: req.file?.filename || '',
    });

    const savedMember = await newMember.save();
    res.status(201).json(savedMember);
  } catch (err) {
    res.status(500).json({ message: 'Error adding member', error: err.message });
  }
};

const getAllMembers = async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching members', error: err.message });
  }
};

const getMemberById = async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    if (member) {
      res.json(member);
    } else {
      res.status(404).json({ message: 'Member not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error fetching member', error: err.message });
  }
};

module.exports = { addMember, getAllMembers, getMemberById };
