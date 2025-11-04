document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const logoutBtn = document.getElementById('logout-btn');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Hardcoded credentials for demonstration
            if (username === 'admin' && password === 'password') {
                sessionStorage.setItem('authenticated', 'true');
                window.location.href = 'dashboard.html';
            } else {
                alert('Invalid username or password');
            }
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            sessionStorage.removeItem('authenticated');
            window.location.href = 'login.html';
        });
    }

    // Redirect to login if not authenticated and not on the login page
    if (!sessionStorage.getItem('authenticated') && window.location.pathname.indexOf('login.html') === -1) {
        window.location.href = 'login.html';
    }
});