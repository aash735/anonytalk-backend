const API_BASE = 'https://anonytalk-backend-1.onrender.com';

let currentProfile = null;
let selectedAvatar = '🌸';
let selectedTheme = 'calm';

const elements = {
    loadingOverlay: document.getElementById('loadingOverlay'),
    toast: document.getElementById('toast'),
    logoutBtn: document.getElementById('logoutBtn'),
    
    onboardingView: document.getElementById('onboardingView'),
    onboardingUsername: document.getElementById('onboardingUsername'),
    onboardingAvatarGrid: document.getElementById('onboardingAvatarGrid'),
    onboardingThemeGrid: document.getElementById('onboardingThemeGrid'),
    onboardingShowAvatar: document.getElementById('onboardingShowAvatar'),
    onboardingAllowDMs: document.getElementById('onboardingAllowDMs'),
    onboardingAppearInExplore: document.getElementById('onboardingAppearInExplore'),
    saveOnboardingBtn: document.getElementById('saveOnboardingBtn'),
    
    profileView: document.getElementById('profileView'),
    profileAvatar: document.getElementById('profileAvatar'),
    profileUsername: document.getElementById('profileUsername'),
    profileThemeBadge: document.getElementById('profileThemeBadge'),
    statusShowAvatar: document.getElementById('statusShowAvatar'),
    statusAllowDMs: document.getElementById('statusAllowDMs'),
    statusAppearInExplore: document.getElementById('statusAppearInExplore'),
    editProfileBtn: document.getElementById('editProfileBtn'),
    
    editView: document.getElementById('editView'),
    editUsername: document.getElementById('editUsername'),
    editAvatarGrid: document.getElementById('editAvatarGrid'),
    editThemeGrid: document.getElementById('editThemeGrid'),
    editShowAvatar: document.getElementById('editShowAvatar'),
    editAllowDMs: document.getElementById('editAllowDMs'),
    editAppearInExplore: document.getElementById('editAppearInExplore'),
    cancelEditBtn: document.getElementById('cancelEditBtn'),
    saveEditBtn: document.getElementById('saveEditBtn')
};

function showLoading() {
    elements.loadingOverlay.classList.remove('hidden');
}

function hideLoading() {
    elements.loadingOverlay.classList.add('hidden');
}

function showToast(message, type = 'success') {
    elements.toast.textContent = message;
    elements.toast.className = `toast ${type} show`;
    setTimeout(() => {
        elements.toast.classList.remove('show');
    }, 3000);
}

function getAuthToken() {
    return localStorage.getItem('token');
}


function logout() {
    localStorage.removeItem('token');
    window.location.href = 'login.html';
}

async function fetchProfile() {
    const token = getAuthToken();
    if (!token) {
        logout();
        return;
    }

    try {
        const response = await fetch(`${API_BASE}/api/profile`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 401) {
            logout();
            return;
        }

        if (response.status === 404) {
            return null;
        }

        if (!response.ok) {
            throw new Error('Failed to fetch profile');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching profile:', error);
        showToast('Unable to load profile. Please try again.', 'error');
        return null;
    }
}

async function createProfile(profileData) {
    const token = getAuthToken();
    if (!token) {
        logout();
        return;
    }

    try {
        const response = await fetch(`${API_BASE}/api/profile`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(profileData)
        });

        if (response.status === 401) {
            logout();
            return;
        }

        if (!response.ok) {
            throw new Error('Failed to create profile');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating profile:', error);
        showToast('Unable to create profile. Please try again.', 'error');
        throw error;
    }
}

async function updateProfile(profileData) {
    const token = getAuthToken();
    if (!token) {
        logout();
        return;
    }

    try {
        const response = await fetch(`${API_BASE}/api/profile`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(profileData)
        });

        if (response.status === 401) {
            logout();
            return;
        }

        if (!response.ok) {
            throw new Error('Failed to update profile');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error updating profile:', error);
        showToast('Unable to update profile. Please try again.', 'error');
        throw error;
    }
}

function applyTheme(theme) {
    document.body.className = `theme-${theme}`;
}

function showView(view) {
    elements.onboardingView.style.display = 'none';
    elements.profileView.style.display = 'none';
    elements.editView.style.display = 'none';
    
    if (view === 'onboarding') {
        elements.onboardingView.style.display = 'block';
    } else if (view === 'profile') {
        elements.profileView.style.display = 'block';
    } else if (view === 'edit') {
        elements.editView.style.display = 'block';
    }
}

function setupAvatarGrid(gridElement) {
    const avatarOptions = gridElement.querySelectorAll('.avatar-option');
    avatarOptions.forEach(option => {
        option.addEventListener('click', () => {
            avatarOptions.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
            selectedAvatar = option.dataset.avatar;
        });
    });
}

function setupThemeGrid(gridElement) {
    const themeOptions = gridElement.querySelectorAll('.theme-option');
    themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            themeOptions.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
            selectedTheme = option.dataset.theme;
            applyTheme(selectedTheme);
        });
    });
}

function setSelectedAvatar(gridElement, avatar) {
    const avatarOptions = gridElement.querySelectorAll('.avatar-option');
    avatarOptions.forEach(option => {
        option.classList.remove('selected');
        if (option.dataset.avatar === avatar) {
            option.classList.add('selected');
        }
    });
}

function setSelectedTheme(gridElement, theme) {
    const themeOptions = gridElement.querySelectorAll('.theme-option');
    themeOptions.forEach(option => {
        option.classList.remove('selected');
        if (option.dataset.theme === theme) {
            option.classList.add('selected');
        }
    });
}

function populateOnboardingView(username) {
    elements.onboardingUsername.value = username || 'Anonymous User';
    setSelectedAvatar(elements.onboardingAvatarGrid, selectedAvatar);
    setSelectedTheme(elements.onboardingThemeGrid, selectedTheme);
}

function populateProfileView(profile) {
    elements.profileAvatar.textContent = profile.avatar;
    elements.profileUsername.textContent = profile.username;
    elements.profileThemeBadge.textContent = `${profile.theme.charAt(0).toUpperCase() + profile.theme.slice(1)} Theme`;
    
    elements.statusShowAvatar.textContent = profile.privacy.showAvatar ? '✓' : '✗';
    elements.statusShowAvatar.className = `privacy-status-icon ${profile.privacy.showAvatar ? '' : 'disabled'}`;
    
    elements.statusAllowDMs.textContent = profile.privacy.allowDMs ? '✓' : '✗';
    elements.statusAllowDMs.className = `privacy-status-icon ${profile.privacy.allowDMs ? '' : 'disabled'}`;
    
    elements.statusAppearInExplore.textContent = profile.privacy.appearInExplore ? '✓' : '✗';
    elements.statusAppearInExplore.className = `privacy-status-icon ${profile.privacy.appearInExplore ? '' : 'disabled'}`;
    
    applyTheme(profile.theme);
}

function populateEditView(profile) {
    elements.editUsername.value = profile.username;
    selectedAvatar = profile.avatar;
    selectedTheme = profile.theme;
    
    setSelectedAvatar(elements.editAvatarGrid, profile.avatar);
    setSelectedTheme(elements.editThemeGrid, profile.theme);
    
    elements.editShowAvatar.checked = profile.privacy.showAvatar;
    elements.editAllowDMs.checked = profile.privacy.allowDMs;
    elements.editAppearInExplore.checked = profile.privacy.appearInExplore;
    
    applyTheme(profile.theme);
}

async function handleSaveOnboarding() {
    showLoading();
    
    const profileData = {
        avatar: selectedAvatar,
        theme: selectedTheme,
        privacy: {
            showAvatar: elements.onboardingShowAvatar.checked,
            allowDMs: elements.onboardingAllowDMs.checked,
            appearInExplore: elements.onboardingAppearInExplore.checked
        }
    };
    
    try {
        const createdProfile = await createProfile(profileData);
        currentProfile = createdProfile;
        showToast('Profile created successfully!', 'success');
        populateProfileView(currentProfile);
        showView('profile');
    } catch (error) {
        showToast('Failed to create profile', 'error');
    } finally {
        hideLoading();
    }
}

async function handleSaveEdit() {
    showLoading();
    
    const profileData = {
        avatar: selectedAvatar,
        theme: selectedTheme,
        privacy: {
            showAvatar: elements.editShowAvatar.checked,
            allowDMs: elements.editAllowDMs.checked,
            appearInExplore: elements.editAppearInExplore.checked
        }
    };
    
    try {
        const updatedProfile = await updateProfile(profileData);
        currentProfile = updatedProfile;
        showToast('Profile updated successfully!', 'success');
        populateProfileView(currentProfile);
        showView('profile');
    } catch (error) {
        showToast('Failed to update profile', 'error');
    } finally {
        hideLoading();
    }
}

function handleEditProfile() {
    populateEditView(currentProfile);
    showView('edit');
}

function handleCancelEdit() {
    applyTheme(currentProfile.theme);
    showView('profile');
}

async function initializePage() {
    const token = getAuthToken();
    if (!token) {
        logout();
        return;
    }
    
    showLoading();
    
    try {
        const profile = await fetchProfile();
        
        if (profile) {
            currentProfile = profile;
            populateProfileView(profile);
            showView('profile');
        } else {
            const username = localStorage.getItem('username') || 'Anonymous User';
            populateOnboardingView(username);
            showView('onboarding');
        }
    } catch (error) {
        showToast('Error loading profile', 'error');
    } finally {
        hideLoading();
    }
}

setupAvatarGrid(elements.onboardingAvatarGrid);
setupThemeGrid(elements.onboardingThemeGrid);
setupAvatarGrid(elements.editAvatarGrid);
setupThemeGrid(elements.editThemeGrid);

elements.logoutBtn.addEventListener('click', logout);
elements.saveOnboardingBtn.addEventListener('click', handleSaveOnboarding);
elements.editProfileBtn.addEventListener('click', handleEditProfile);
elements.cancelEditBtn.addEventListener('click', handleCancelEdit);
elements.saveEditBtn.addEventListener('click', handleSaveEdit);

document.addEventListener('DOMContentLoaded', initializePage);