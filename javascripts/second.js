<<<<<<< HEAD
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

  if (!users.hasOwnProperty(email)) {
    errorMsg.textContent = 'Invalid username or password.';
    return; 
  }

  if (users[email] !== password) {
    return;
  }
  
  if (email === 'admin@gmail.com' && password === 'admin123') {
    window.location.href = 'admin.html';
  } else { 
    window.location.href = 'client.html';
  }


  
});


=======
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

  if (!users.hasOwnProperty(email)) {
    errorMsg.textContent = 'Invalid username or password.';
    return; 
  }

  if (users[email] !== password) {
    return;
  }
  
  if (email === 'admin@gmail.com' && password === 'admin123') {
    window.location.href = 'admin.html';
  } else { 
    window.location.href = 'client.html';
  }


  
});


>>>>>>> ea33b6f8231dc6503b4826a769a66f82119952e5
