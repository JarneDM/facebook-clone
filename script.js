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



// function toggleLikeTwo() {
  //   let likeButton = document.getElementById('like-btn2');
  //   likeButton.classList.toggle('liked');
  // }
  
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
  