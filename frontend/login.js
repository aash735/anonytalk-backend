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
    loginButton.disabled = true;
    loginButton.style.opacity = '0.6';
    loadingSpinner.classList.add('active');
}

/**
 * Hide loading state
 */
function hideLoading() {
    loginButton.disabled = false;
    loginButton.style.opacity = '1';
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

    // Check for at least one letter and one number
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

// ===========================
// API Call
// ===========================
async function handleLogin(username, password) {
    try {
        // Update to your live backend login endpoint when available
        const response = await fetch('https://anonytalk-backend-1.onrender.com/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.message || 'Login failed');
        return data;
    } catch (error) {
        throw error;
    }
}

// ===========================
// Event Handlers
// ===========================
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    hideError();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Validate inputs
    const usernameValidation = validateUsername(username);
    if (!usernameValidation.success) {
        showError(usernameValidation.message);
        return;
    }

    const passwordValidation = validatePassword(password);
    if (!passwordValidation.success) {
        showError(passwordValidation.message);
        return;
    }

    showLoading();

    try {
        const response = await handleLogin(username, password);
        hideLoading();

        if (response.token) {
            localStorage.setItem('authToken', response.token);
            localStorage.setItem('username', username);
            // Redirect to chat page
            window.location.href = 'chat.html';
        } else {
            showError('Login failed. Please try again.');
        }
    } catch (error) {
        hideLoading();
        showError(error.message || 'Connection error. Please try again.');
        console.error('Login error:', error);
    }
});

// Clear error messages when typing
usernameInput.addEventListener('input', hideError);
passwordInput.addEventListener('input', hideError);

// ===========================
// Initialization
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('authToken');
    if (token) {
        window.location.href = 'chat.html';
    }
    usernameInput.focus();
});
