function signup() {
    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    
    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
      if (data.success) {
        window.location.href = '/index2.html';
      }
    })
    .catch(err => {
      console.error('Error:', err);
    });
  }
  
  function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
      if (data.success) {
        window.location.href = '/index2.html';
      }
    })
    .catch(err => {
      console.error('Error:', err);
    });
  }
  