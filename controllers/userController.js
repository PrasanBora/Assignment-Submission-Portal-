
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Assignment = require('../models/Assignment');

// Register a new user
exports.registerUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, password: hashedPassword });
        
        res.status(201).json({ message: 'User registered', user });
    } catch (error) 
    {
        res.status(400).json({ message: error.message });
    }
};

// User login
exports.loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Upload assignment
exports.uploadAssignment = async (req, res) => {
    const { userId, task, admin } = req.body;
    try {
        const assignment = await Assignment.create({ userId, task, admin });
        res.status(201).json({ message: 'Assignment uploaded', assignment });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
