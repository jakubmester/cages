const current = document.querySelector('#currentimg');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.6;

// Set first img opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

 function imgClick(e) {
 	// Reset the opacity
 	imgs.forEach(img => (img.style.opacity = 1));

 	// Change current image to src of clicked image
 	currentimg.src = e.target.src;

 	// Add fade in class
 	currentimg.classList.add('fade-in');

 	// Remove fade-in class after .5 seconds

 	setTimeout(() => currentimg.classList.remove('fade-in'), 500);

 	// Change the opacity to opacity var
 	e.target.style.opacity = opacity;
 }