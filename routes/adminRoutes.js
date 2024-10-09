
const express = require('express');
const {
    registerAdmin,
    loginAdmin,
    getAssignments,
    acceptAssignment,
    rejectAssignment
} = require('../controllers/adminController');
const { authAdmin } = require('../middleware/authMiddleware'); 
// Add admin authentication middleware
const router = express.Router();

router.post('/register', registerAdmin);
router.post('/login', loginAdmin);
router.get('/assignments', authAdmin, getAssignments);
router.post('/assignments/:id/accept', authAdmin, acceptAssignment);
router.post('/assignments/:id/reject', authAdmin, rejectAssignment);

module.exports = router;
