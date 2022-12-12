let photo = document.getElementById('.photo');
let cellCount = 9;
let selectedIndex = 0;

const phot = document .getElementById ('photo');
photo .addEventListener ('photo', (event) => {
  let angle = selectedIndex / cell * -360;
  photo.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';
})

let backButton = document.getElementById('.back_button');
backButton.addEventListener( 'click', (event) => {
  selectedIndex--;
  backButton.classList.rotatePhoto();
});

let nextButton = document.getElementById('.next_button');
nextButton.addEventListener( 'click',(event) => {
  selectedIndex++;
  nextButton.classList.rotatePhoto();
});