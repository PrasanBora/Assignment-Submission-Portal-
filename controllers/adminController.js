const Admin = require('../models/Admin');
const Assignment = require('../models/Assignment');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register a new admin
exports.registerAdmin = async (req, res) => {
    const { username, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const admin = await Admin.create({ username, password: hashedPassword });
        res.status(201).json({ message: 'Admin registered', admin });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Admin login
exports.loginAdmin = async (req, res) => {
    const { username, password } = req.body;
    try {
        const admin = await Admin.findOne({ username });
        if (!admin || !(await bcrypt.compare(password, admin.password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// View assignments
exports.getAssignments = async (req, res) => {
    const adminId = req.admin.id; // Assuming admin ID is available in req.admin
    try {
        const assignments = await Assignment.find({ admin: adminId });
        res.status(200).json(assignments);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Accept assignment
exports.acceptAssignment = async (req, res) => {
    const { id } = req.params;
    try {
        const assignment = await Assignment.findByIdAndUpdate(id, { status: 'accepted' }, { new: true });
        res.status(200).json({ message: 'Assignment accepted', assignment });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Reject assignment
exports.rejectAssignment = async (req, res) => {
    const { id } = req.params;
    try {
        const assignment = await Assignment.findByIdAndUpdate(id, { status: 'rejected' }, { new: true });
        res.status(200).json({ message: 'Assignment rejected', assignment });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
