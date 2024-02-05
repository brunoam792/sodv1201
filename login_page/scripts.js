function validatePassword() {
    var passwordInput = document.getElementById('password');
    var messageElement = document.getElementById('message');
  
    var password = passwordInput.value;
  
    if (password.length < 6) {
      messageElement.textContent = 'Password should be at least 6 characters long.';
      passwordInput.style.border = '2px solid red';
    } else {
      messageElement.textContent = 'Success!';
      passwordInput.style.border = '2px solid #4caf50';
    }
  }
  