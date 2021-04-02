const router = require('express').Router();
const path = require('path');
const userRoutes = require('./user');
const apiRoutes = require('./api');

// User Routes
router.use('/user', userRoutes);
// API Routes
router.use('/api', apiRoutes);

// If no API routes are hit, send the React app
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

module.exports = router;
