const UserProfile = require('../models/UserProfile');

// @desc    Get current user's profile
// @route   GET /api/profile
// @access  Private (requires protect middleware)
const getProfile = async (req, res) => {
  try {
    const profile = await UserProfile.findOne({ userId: req.user._id });
    
    if (!profile) {
      return res.status(200).json({
        success: true,
        profile: null
      });
    }

    res.status(200).json({
      success: true,
      profile
    });
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch profile'
    });
  }
};

// @desc    Create user profile
// @route   POST /api/profile
// @access  Private (requires protect middleware)
const createProfile = async (req, res) => {
  try {
    // Check if profile already exists
    const existingProfile = await UserProfile.findOne({ userId: req.user._id });
    
    if (existingProfile) {
      return res.status(400).json({
        success: false,
        message: 'Profile already exists'
      });
    }

    // Create new profile
    const profile = await UserProfile.create({
      userId: req.user._id,
      username: req.user.username, // Auto-assign from authenticated user
      avatar: req.body.avatar || null,
      theme: req.body.theme || 'calm',
      privacy: {
        showAvatar: req.body.privacy?.showAvatar !== undefined ? req.body.privacy.showAvatar : true,
        allowDMs: req.body.privacy?.allowDMs !== undefined ? req.body.privacy.allowDMs : true,
        appearInExplore: req.body.privacy?.appearInExplore !== undefined ? req.body.privacy.appearInExplore : true
      },
      onboardingCompleted: true // Mark onboarding as complete
    });

    res.status(201).json({
      success: true,
      profile
    });
  } catch (error) {
    console.error('Create profile error:', error);
    
    // Handle duplicate key error
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'Profile already exists'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Failed to create profile'
    });
  }
};

// @desc    Update user profile
// @route   PUT /api/profile
// @access  Private (requires protect middleware)
const updateProfile = async (req, res) => {
  try {
    const profile = await UserProfile.findOne({ userId: req.user._id });

    if (!profile) {
      return res.status(404).json({
        success: false,
        message: 'Profile not found. Please create a profile first.'
      });
    }

    // Fields that can be updated (username is NOT included - it's immutable)
    const allowedUpdates = {
      avatar: req.body.avatar,
      theme: req.body.theme,
      privacy: req.body.privacy
    };

    // Only update fields that were provided
    if (allowedUpdates.avatar !== undefined) {
      profile.avatar = allowedUpdates.avatar;
    }
    
    if (allowedUpdates.theme !== undefined) {
      profile.theme = allowedUpdates.theme;
    }
    
    if (allowedUpdates.privacy !== undefined) {
      // Update privacy settings individually
      if (allowedUpdates.privacy.showAvatar !== undefined) {
        profile.privacy.showAvatar = allowedUpdates.privacy.showAvatar;
      }
      if (allowedUpdates.privacy.allowDMs !== undefined) {
        profile.privacy.allowDMs = allowedUpdates.privacy.allowDMs;
      }
      if (allowedUpdates.privacy.appearInExplore !== undefined) {
        profile.privacy.appearInExplore = allowedUpdates.privacy.appearInExplore;
      }
    }

    await profile.save();

    res.status(200).json({
      success: true,
      profile
    });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update profile'
    });
  }
};

module.exports = {
  getProfile,
  createProfile,
  updateProfile
};