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
