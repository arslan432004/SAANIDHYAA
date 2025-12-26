// Check login status and update navbar
function checkLoginStatus() {
    fetch('check_login.php')
        .then(response => response.json())
        .then(data => {
            const authLinks = document.getElementById('auth-links');
            if (data.logged_in) {
                authLinks.innerHTML = `
                    <div class="text-sm text-white mr-4">Welcome, ${data.username}</div>
                    <a href="logout.php" class="text-white hover:text-amber-300 transition-colors">Logout</a>
                `;
            } else {
                authLinks.innerHTML = `
                    <a href="login.html" class="text-white hover:text-amber-300 transition-colors mr-4">Login</a>
                    <a href="signup.html" class="text-white hover:text-amber-300 transition-colors">Sign Up</a>
                `;
            }
        })
        .catch(error => {
            console.error('Error checking login status:', error);
        });
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', checkLoginStatus); 