
const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

// Connect to the database
connectDB();

// Routes
app.use('/api/users', userRoutes);
app.use('/api/admins', adminRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
console.log("connected");
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
