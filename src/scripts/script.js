let slideIndex = 0;
const itemsPerPage = 4;

function showSlides(n) {
	let slides = document.getElementsByClassName("pro");
	let totalSlides = slides.length;

	// Ensure slideIndex stays within bounds
	slideIndex = Math.max(0, Math.min(n, totalSlides - itemsPerPage));

	// Hide all slides
	for (let i = 0; i < totalSlides; i++) {
		slides[i].style.display = "none";
	}

	// Show the slides from slideIndex
	for (
		let i = slideIndex;
		i < slideIndex + itemsPerPage && i < totalSlides;
		i++
	) {
		slides[i].style.display = "flex";
	}

	// Disable/enable arrows based on slide index
	document.querySelector(".prev").style.display =
		slideIndex === 0 ? "none" : "block";
	document.querySelector(".next").style.display =
		slideIndex + itemsPerPage >= totalSlides ? "none" : "block";
}

function nextSlide() {
	let slides = document.getElementsByClassName("pro");
	if (slideIndex + itemsPerPage < slides.length) {
		showSlides(slideIndex + 1);
	}
}

function prevSlide() {
	if (slideIndex > 0) {
		showSlides(slideIndex - 1);
	}
}

// Initialize first set of slides
showSlides(0);

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);
