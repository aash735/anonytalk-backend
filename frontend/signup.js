// ===========================
// DOM Elements
// ===========================
const signupForm = document.getElementById('signupForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const termsCheckbox = document.getElementById('termsCheckbox');
const signupButton = document.getElementById('signupButton');
const loadingSpinner = document.getElementById('loadingSpinner');
const errorMessage = document.getElementById('errorMessage');
const successMessage = document.getElementById('successMessage');

// ===========================
// Utility Functions
// ===========================
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add('active');
    setTimeout(() => hideError(), 5000);
}

function hideError() {
    errorMessage.classList.remove('active');
}

function showSuccess(message) {
    successMessage.textContent = message;
    successMessage.classList.add('active');
    setTimeout(() => hideSuccess(), 5000);
}

function hideSuccess() {
    successMessage.classList.remove('active');
}

function showLoading() {
    signupButton.style.display = 'none';
    loadingSpinner.classList.add('active');
}

function hideLoading() {
    signupButton.style.display = 'block';
    loadingSpinner.classList.remove('active');
}

// ===========================
// Validation Functions
// ===========================
function validateUsername(username) {
    if (!username) return { success: false, message: 'Username is required' };
    if (username.length < 3) return { success: false, message: 'Username must be at least 3 characters' };
    if (username.length > 20) return { success: false, message: 'Username must be less than 20 characters' };
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    if (!usernameRegex.test(username)) return { success: false, message: 'Username can only contain letters, numbers, and underscores' };
    return { success: true };
}

function validatePassword(password) {
    if (!password) return { success: false, message: 'Password is required' };
    if (password.length < 6) return { success: false, message: 'Password must be at least 6 characters' };
    if (password.length > 100) return { success: false, message: 'Password is too long' };
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    if (!hasLetter || !hasNumber) return { success: false, message: 'Password should contain both letters and numbers' };
    return { success: true };
}

function validateForm() {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();
    const termsAccepted = termsCheckbox.checked;

    const usernameValidation = validateUsername(username);
    if (!usernameValidation.success) return usernameValidation;

    const passwordValidation = validatePassword(password);
    if (!passwordValidation.success) return passwordValidation;

    if (password !== confirmPassword) return { success: false, message: 'Passwords do not match' };
    if (!termsAccepted) return { success: false, message: 'You must agree to the terms and conditions' };

    return { success: true };
}

// ===========================
// API Call
// ===========================
async function handleSignup(username, password) {
    try {
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.message || 'Registration failed');
        return data;
    } catch (error) {
        throw error;
    }
}

// ===========================
// Event Handlers
// ===========================
signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    hideError();
    hideSuccess();

    const validation = validateForm();
    if (!validation.success) {
        showError(validation.message);
        return;
    }

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    showLoading();

    try {
        const response = await handleSignup(username, password);
        if (response.token) {
            localStorage.setItem('authToken', response.token);
            localStorage.setItem('username', username);
        }
        showSuccess('Account created successfully! Redirecting...');
        setTimeout(() => window.location.href = 'chat.html', 1500);
    } catch (error) {
        hideLoading();
        showError(error.message || 'Connection error. Please try again.');
        console.error('Signup error:', error);
    }
});

// Real-time validations
usernameInput.addEventListener('input', hideError);
passwordInput.addEventListener('input', hideError);
confirmPasswordInput.addEventListener('input', hideError);

// Password strength indicator
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

// Check if already logged in
document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('authToken');
    if (token) window.location.href = 'chat.html';
});
