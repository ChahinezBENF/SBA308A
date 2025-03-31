import { getAccessToken } from './api.js';

// This will handle the OAuth callback URL 
function handleCallback() {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    if (token) {
        getAccessToken(token); // Get the session key after the user has authorized
    }
}

// Run handleCallback if we're on the callback page
if (window.location.pathname === '/callback') {
    handleCallback();
}