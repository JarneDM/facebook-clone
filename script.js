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
const namesInput = document.getElementById("names"); // Get the confirm names input element
const inputForm = document.getElementById("signup-items"); // Get the form element

inputForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const emailPattern = /^[\w.-]+@[\w.-]+\.\w+$/; // Regular expression pattern for email validation
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Regular expression pattern for password validation
  const namePattern = /^[\w.-]/;
  
  const isEmailValid = emailPattern.test(emailInput.value); // Check if email is valid using the emailPattern
  const isPasswordSecure = passwordPattern.test(passwordInput.value); // Check if password is secure using the passwordPattern
  const isNamesValid = namePattern.test(namesInput.value); // check if names are valid or not
  
  // const doPasswordsMatch = passwordInput.value === namesInput.value && isNamesValid; // Check if password and confirm password match and if password is secure
  
  // Modify the CSS classes of the email input based on its validity
  emailInput.classList.toggle("success", isEmailValid); // Add "success" class if email is valid
  emailInput.classList.toggle("error", !isEmailValid); // Add "error" class if email is invalid
  
  // Modify the CSS classes of the password and confirm password inputs based on their security
  passwordInput.classList.toggle("success", isPasswordSecure); // Add "success" class if password is secure
  passwordInput.classList.toggle("error", !isPasswordSecure); // Add "error" class if password is not secure
  namesInput.classList.toggle("success", isNamesValid); // Add "success" class if password is secure
  namesInput.classList.toggle("error", !isNamesValid); // Add "error" class if password is not secure
  
  // Modify the CSS classes of the password and confirm password inputs based on their match status
  // passwordInput.classList.toggle("error", !doPasswordsMatch); // Add "error" class if passwords do not match or are not secure
  // namesInput.classList.toggle("error", !doPasswordsMatch); // Add "error" class if passwords do not match or are not secure
  // passwordInput.classList.toggle("success", doPasswordsMatch); // Add "success" class if passwords match and are secure
  // namesInput.classList.toggle("success", doPasswordsMatch); // Add "success" class if passwords match and are secure
});