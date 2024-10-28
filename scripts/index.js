// Form validation
function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert('Please fill in both fields.');
        return false;
    }
    return true;
}

// Toggle password visibility
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');
const eyeIcon = document.getElementById('eyeIcon');

togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    eyeIcon.classList.toggle('fa-eye');
    eyeIcon.classList.toggle('fa-eye-slash');
});

// Function to handle user registration
async function registerUser(event) {
    event.preventDefault(); // Prevent default form submission

    if (!validateForm()) return; // Validate the form

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:5000/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        if (response.ok) {
            alert('User registered successfully!');
        } else {
            alert(data.message || 'Registration failed.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
}

// Function to get user data (for demonstration)
async function getUserData() {
    try {
        const response = await fetch('http://localhost:5000/api/users'); // Adjust the endpoint as needed
        const data = await response.json();
        
        if (response.ok) {
            console.log('User Data:', data);
            // You can display the user data in your UI as needed
        } else {
            console.error('Failed to fetch user data:', data.message);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call getUserData on page load or based on your requirements
getUserData();
