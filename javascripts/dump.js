const loginForm = document.getElementById('loginForm');
let userdic = {};

if (loginForm) {
  // Check if user dictionary already exists in local storage
  if (localStorage.getItem('userdic')) {
    userdic = JSON.parse(localStorage.getItem('userdic')); // Load existing data
  }

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    if (emailInput && passwordInput) {
      const key = emailInput.value.toLowerCase();
      const value = passwordInput.value;

      userdic[key] = value;

      // Clear input fields for user privacy
      emailInput.value = '';
      passwordInput.value = '';

      // Store updated dictionary in local storage
      localStorage.setItem('userdic', JSON.stringify(userdic));

      // Print the dictionary to the console (optional)
      console.log('User dictionary:', userdic);

      const loginForm1 = document.getElementById('loginForm1');

      loginForm1.addEventListener('submit', (event) => {
        event.preventDefault();

      if (!userdic.hasOwnProperty(key)) {
        return; // Stop execution if username is not found
      }
    
      if (userdic[key] !== value) {
        return; // Stop execution if password is incorrect
      }
      else {
        window.location.href = 'third.html';
      }
    })
      

    } else {
      console.error('Email or password input elements not found.');
    }
  });
} else {
  console.error('Element with ID "loginForm" not found.');
}
