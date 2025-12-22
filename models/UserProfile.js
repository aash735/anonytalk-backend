const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
      index: true
    },
    username: {
      type: String,
      required: true,
      immutable: true // Makes field read-only after creation
    },
    avatar: {
      type: mongoose.Schema.Types.Mixed, // Flexible JSON/object storage
      default: null
    },
    theme: {
      type: String,
      enum: ['calm', 'dark', 'light', 'ocean', 'forest'],
      default: 'calm'
    },
    privacy: {
      showAvatar: {
        type: Boolean,
        default: true
      },
      allowDMs: {
        type: Boolean,
        default: true
      },
      appearInExplore: {
        type: Boolean,
        default: true
      }
    },
    onboardingCompleted: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true // Adds createdAt and updatedAt automatically
  }
);

// Index for faster lookups
userProfileSchema.index({ userId: 1 });

const UserProfile = mongoose.model('UserProfile', userProfileSchema);

module.exports = UserProfile;