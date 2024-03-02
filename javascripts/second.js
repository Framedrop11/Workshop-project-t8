const loginForm = document.getElementById('loginForm1');
const errorMsg = document.getElementById('errorMsg');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value.toLowerCase();
  const password = document.getElementById('password').value;

  const users = {
    'mriganka@gmail.com': 'mriganka',
    'rajkhowa@gmail.com': 'rajkhowa',
    'admin@gmail.com': 'admin123'
  };

  // Check if username (email) exists and password matches
  if (!users.hasOwnProperty(email)) {
    errorMsg.textContent = 'Invalid username or password.';
    return; // Stop execution if username is not found
  }

  if (users[email] !== password) {
    // errorMsg.textContent = 'Invalid username or password.';
    return; // Stop execution if password is incorrect
  }

  // Login successful, redirect to third.html
  window.location.href = 'third.html';
});






// function simulateHashing(password) {
//     // **Important Note:** This is not a secure hashing function. Never use this in a real application.
//     return `hashed_${password}`;
// }

// registerform.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const email = document.getElementById('email').value.toLowerCase();
//     const password = simulateHashing(document.getElementById('password').value);

//     user.email = email;
//     user.hashedPassword = password;

//     // **Instead of storing, simulate a successful registration message:**
//     alert(`Registration successful for user: ${email}`);
// });
