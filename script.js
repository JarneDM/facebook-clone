console.log("Script is loaded");
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

// TODO: ADD COMMENTS, SHARE ICON
// TODO: ADD LOGIC TO LOGING IN AND SIGNING UP
    // NOTE: SO DONT LOGIN WITH EMPTY INPUTS...

// TODO: STYLE FORGOT PASSWORD PAGE A LITTLE (AFTER EVERYTHING IMPORTANT IS DONE)
// TODO: ADD PEOPLE WHO ARE ONLINE AT THE MOMENT ON THE RIGHT
  
function handleCount(likeButton) {
  const counterId = likeButton.getAttribute('data-counter');
  const numLikes = document.getElementById(counterId);
  let count = parseInt(numLikes.textContent);

  if (likeButton.classList.contains('liked')) {
    count++;
  } else {
    count--;
  }

  numLikes.textContent = count;
}

function toggleLike(likeButton) {
  likeButton.classList.toggle('liked');
  handleCount(likeButton);
}
