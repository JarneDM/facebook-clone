
const genderOptions = document.querySelectorAll('input[name="gender"]');

genderOptions.forEach(option => {
  option.addEventListener('change', function() {
    genderOptions.forEach(otherOption => {
      if (otherOption !== this) {
        otherOption.checked = false;
      }
    });
  });
});


function toggleLike() {
  let likeButton = document.getElementById('like-btn');
  likeButton.classList.toggle('liked');
}

function toggleLikeTwo() {
  let likeButton = document.getElementById('like-btn2');
  likeButton.classList.toggle('liked');
}



const emailInput = document.getElementById("email"); // Get the email input element
const passwordInput = document.getElementById("password"); // Get the password input element
const confirmPasswordInput = document.getElementById("confirm-password"); // get the confirm password input element
const namesInput = document.getElementById("names"); // Get the confirm names input element
const inputForm = document.getElementById("container"); // Get the form element

inputForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const emailPattern = /^[\w.-]+@[\w.-]+\.\w+$/; // Regular expression pattern for email validation
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Regular expression pattern for password validation
  const namePattern = /^[\w.-]/;
  
  const isEmailValid = emailPattern.test(emailInput.value); // Check if email is valid using the emailPattern
  const isPasswordSecure = passwordPattern.test(passwordInput.value); // Check if password is secure using the passwordPattern
  const isNamesValid = namePattern.test(namesInput.value); // check if names are valid or not
  
  const doPasswordsMatch = passwordInput.value === confirmPasswordInput.value && isPasswordSecure; // Check if password and confirm password match and if password is secure
  
  // Modify the CSS classes of the email input based on its validity
  emailInput.classList.toggle("success", isEmailValid); // Add "success" class if email is valid
  emailInput.classList.toggle("error", !isEmailValid); // Add "error" class if email is invalid
  
  // Modify the CSS classes of the password and confirm password inputs based on their security
  passwordInput.classList.toggle("success", isPasswordSecure); // Add "success" class if password is secure
  passwordInput.classList.toggle("error", !isPasswordSecure); // Add "error" class if password is not secure
  confirmPasswordInput.classList.toggle("success", isPasswordSecure); // Add succes class if password is secure
  confirmPasswordInput.classList.toggle("error", !isPasswordSecure); // Add error class if password is not secure
  namesInput.classList.toggle("success", isNamesValid); // Add "success" class if password is secure
  namesInput.classList.toggle("error", !isNamesValid); // Add "error" class if password is not secure
  
  // Modify the CSS classes of the password and confirm password inputs based on their match status
  passwordInput.classList.toggle("error", !doPasswordsMatch); // Add "error" class if passwords do not match or are not secure
  confirmPasswordInput.classList.toggle("error", !doPasswordsMatch); // Add "error" class if passwords do not match or are not secure
  passwordInput.classList.toggle("success", doPasswordsMatch); // Add "success" class if passwords match and are secure
  confirmPasswordInput.classList.toggle("success", doPasswordsMatch); // Add "success" class if passwords match and are secure
});

window.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("login-form");
  const loginMail = document.getElementById("login-mail");
  const loginPassword = document.getElementById("login-password");

  if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();

      const emailPattern = /^[\w.-]+@[\w.-]+\.\w+$/; // Regular expression pattern for email validation
      const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Regular expression pattern for password validation

      const isEmailValid = emailPattern.test(loginMail.value); // Check if email is valid using the emailPattern
      const isPasswordSecure = passwordPattern.test(loginPassword.value); // Check if password is secure using the passwordPattern

      loginMail.classList.toggle("success", isEmailValid); // Add "success" class if email is valid
      loginMail.classList.toggle("error", !isEmailValid); // Add "error" class if email is invalid

      loginPassword.classList.toggle("success", isPasswordSecure); // Add "success" class if password is secure
      loginPassword.classList.toggle("error", !isPasswordSecure); // Add "error" class if password is not secure

      if (isEmailValid) {
        window.location.href = "http://127.0.0.1:5500/landing-page.html";
      } else {
        alert("Invalid Email");
      }
    });
  } else {
    console.log("Element with ID 'login-form' not found.");
  }
});





