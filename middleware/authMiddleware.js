
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

exports.authAdmin = async (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.admin = await Admin.findById(decoded.id);
        next();
    } catch (error) {
        res.status(401).json({ message: 'Unauthorized' });
    }
};
