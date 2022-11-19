var slider = document.querySelector("figure");
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	if (n < 1) { 
		slideIndex = 5;
	} 
	
	if (n > 5) { 
		slideIndex = 1;
	} 

 	if (n === 1) {
		slideIndex = 1;
		slider.style.left = "0";
		slider.style.transition = "all 1s ease-in-out";
	} if (n === 2) {
		slideIndex = 2;
		slider.style.left = "-100%";
		slider.style.transition = "all 1s ease-in-out";
	} if (n === 3) {
		slideIndex = 3;
		slider.style.left = "-200%";
		slider.style.transition = "all 1s ease-in-out";
	} if (n === 4) {
		slideIndex = 4;
		slider.style.left = "-300%";
		slider.style.transition = "all 1s ease-in-out";
	} if (n === 5) {
		slideIndex = 5;
		slider.style.left = "-400%";
		slider.style.transition = "all 1s ease-in-out";
	}
}