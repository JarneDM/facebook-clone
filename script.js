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


function toggleLike() {
  let likeButton = document.getElementById('like-btn');
  likeButton.classList.toggle('liked');
}

function toggleLikeTwo() {
  let likeButton = document.getElementById('like-btn2');
  likeButton.classList.toggle('liked');
}

