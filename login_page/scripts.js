//Javascript

// function validatePassword() {
//     let passwordInput = document.getElementById('password');
//     let messageElement = document.getElementById('message');
  
//     let password = passwordInput.value;
  
//     if (password.length < 6) {
//       messageElement.textContent = 'Password should be at least 6 characters long.';
//       passwordInput.style.border = '2px solid red';
//     } else {
//       messageElement.textContent = 'Success!';
//       passwordInput.style.border = '2px solid #4caf50';
//     }
//   }
  
//JQuery
$(document).ready(function() {
  function validatePassword() {
    var password = $('#password').val();
    var message = $('#message');

    if (password.length < 6) {
      message.text('Password should be at least 6 characters long.');
      $('#password').css('border', '2px solid red');
    } else {
      message.text('Success!');
      $('#password').css('border', '2px solid #4caf50');
    }
  }

  $('#button').on('click', validatePassword);
});