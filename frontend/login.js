// ===========================
// DOM Elements
// ===========================
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginButton');
const loadingSpinner = document.getElementById('loadingSpinner');
const errorMessage = document.getElementById('errorMessage');

// ===========================
// Utility Functions
// ===========================

/**
 * Display error message to user
 * @param {string} message - Error message to display
 */
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add('active');
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        hideError();
    }, 5000);
}

/**
 * Hide error message
 */
function hideError() {
    errorMessage.classList.remove('active');
}

/**
 * Show loading state
 */
function showLoading() {
    signupButton.style.display = 'none';
    loadingSpinner.classList.add('active');
}

/**
 * Hide loading state
 */
function hideLoading() {
    signupButton.style.display = 'block';
    loadingSpinner.classList.remove('active');
}

/**
 * Validate username
 * @param {string} username - Username to validate
 * @returns {object} - Validation result
 */
function validateUsername(username) {
    if (!username) {
        return { success: false, message: 'Username is required' };
    }

    if (username.length < 3) {
        return { success: false, message: 'Username must be at least 3 characters' };
    }

    if (username.length > 20) {
        return { success: false, message: 'Username must be less than 20 characters' };
    }

    // Check for valid characters (alphanumeric and underscore)
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    if (!usernameRegex.test(username)) {
        return { success: false, message: 'Username can only contain letters, numbers, and underscores' };
    }

    return { success: true };
}

/**
 * Validate password strength
 * @param {string} password - Password to validate
 * @returns {object} - Validation result
 */
function validatePassword(password) {
    if (!password) {
        return { success: false, message: 'Password is required' };
    }

    if (password.length < 6) {
        return { success: false, message: 'Password must be at least 6 characters' };
    }

    if (password.length > 100) {
        return { success: false, message: 'Password is too long' };
    }

    // Check for at least one letter and one number (optional, but recommended)
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    
    if (!hasLetter || !hasNumber) {
        return { 
            success: false, 
            message: 'Password should contain both letters and numbers for better security' 
        };
    }

    return { success: true };
}

/**
 * Validate signup form inputs
 * @returns {object} - Validation result with success status and message
 */
function validateForm() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();
    const termsAccepted = termsCheckbox.checked;

    // Validate username
    const usernameValidation = validateUsername(username);
    if (!usernameValidation.success) {
        return usernameValidation;
    }

    // Validate password
    const passwordValidation = validatePassword(password);
    if (!passwordValidation.success) {
        return passwordValidation;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        return { success: false, message: 'Passwords do not match' };
    }

    // Check if terms are accepted
    if (!termsAccepted) {
        return { success: false, message: 'You must agree to the terms and conditions' };
    }

    return { success: true };
}

/**
 * Handle signup API call
 * @param {string} username - User's chosen username
 * @param {string} password - User's chosen password
 * @returns {Promise} - API response
 */
async function handleSignup(username, password) {
    try {
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Registration failed');
        }

        return data;
    } catch (error) {
        throw error;
    }
}

// ===========================
// Event Handlers
// ===========================

/**
 * Handle form submission
 */
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Hide any existing messages
    hideError();
    hideSuccess();

    // Validate form inputs
    const validation = validateForm();
    if (!validation.success) {
        showError(validation.message);
        return;
    }

    // Get form values
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Show loading state
    showLoading();

    try {
        // Attempt registration
        const response = await handleSignup(username, password);

        // Store authentication token if provided
        if (response.token) {
            localStorage.setItem('authToken', response.token);
            localStorage.setItem('username', username);
        }

        // Show success message
        showSuccess('Account created successfully! Redirecting...');

        // Redirect to chat page after short delay
        setTimeout(() => {
            window.location.href = 'chat.html';
        }, 1500);

    } catch (error) {
        // Hide loading state
        hideLoading();

        // Display error message
        const errorMsg = error.message || 'Connection error. Please try again.';
        showError(errorMsg);

        // Log error for debugging (remove in production)
        console.error('Signup error:', error);
    }
});

/**
 * Clear messages when user starts typing
 */
usernameInput.addEventListener('input', () => {
    hideError();
    hideSuccess();
});

passwordInput.addEventListener('input', () => {
    hideError();
    hideSuccess();
});

confirmPasswordInput.addEventListener('input', () => {
    hideError();
    hideSuccess();
});

/**
 * Real-time password match validation
 */
confirmPasswordInput.addEventListener('blur', () => {
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();
    
    if (confirmPassword && password !== confirmPassword) {
        showError('Passwords do not match');
    }
});

/**
 * Show password strength indicator (optional enhancement)
 */
passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    const hint = passwordInput.parentElement.nextElementSibling;
    
    if (password.length === 0) {
        hint.textContent = 'At least 6 characters';
        hint.style.color = '#666';
    } else if (password.length < 6) {
        hint.textContent = 'Too short';
        hint.style.color = '#ff6b8a';
    } else if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
        hint.textContent = 'Add letters and numbers';
        hint.style.color = '#ffaa00';
    } else {
        hint.textContent = 'Strong password ✓';
        hint.style.color = '#50ffa0';
    }
});

// ===========================
// Initialization
// ===========================

/**
 * Check if user is already logged in
 */
function checkExistingAuth() {
    const token = localStorage.getItem('authToken');
    if (token) {
        // User already logged in, redirect to chat
        window.location.href = 'chat.html';
    }
}

// ===========================
// Run on Page Load
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    checkExistingAuth();
    
    // Focus on username input
    usernameInput.focus();
});

// ===========================
// Handle Terms Link Click
// ===========================
document.querySelector('.inline-link').addEventListener('click', (e) => {
    e.preventDefault();
    showError('Terms and conditions page is coming soon.');
});