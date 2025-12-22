const express = require('express');
const router = express.Router();
const { getProfile, createProfile, updateProfile } = require('../controllers/profile.controller');
const { protect } = require('../middleware/auth.middleware'); // Use existing protect middleware

// All routes are protected - user must be authenticated
router.get('/', protect, getProfile);
router.post('/', protect, createProfile);
router.put('/', protect, updateProfile);

module.exports = router;