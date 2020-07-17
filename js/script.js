let images = document.querySelectorAll('.pics__img');
images.forEach((img) => {
	img.addEventListener('click', showFullScreen);
});

document.querySelector('.pics').addEventListener('click', showAllImages);

function showFullScreen(e) {
	images.forEach((img) => {
		img.style.display = 'none';
	});
	e.target.parentElement.style.display = 'inline';
	e.target.parentElement.classList.add('large-pic');
	e.stopPropagation();
}

function showAllImages(e) {
	images.forEach((img) => {
		img.style.display = 'inline';
		img.classList.remove('large-pic');
	});
}
