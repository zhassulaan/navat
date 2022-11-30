var slider = document.querySelector("figure");
var line = document.getElementsByClassName("feature-line");

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	slideIndex += n;
	if (slideIndex < 1)
		slideIndex = 5;
	else if (slideIndex > 5)
		slideIndex = 1;
	showSlides(slideIndex);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

let i = 1; 
function volgendefoto() {
	i < 6 ? i += 1 : i = 1; 
	showSlides(i)
}

setInterval(volgendefoto, 5000);

function showSlides(n) {
	for (let j = 0; j < 5; j++)
		line[j].style.animation = "none";

 	if (n === 1) {
		slideIndex = 1;
		slider.style.left = "0";
		slider.style.transition = "all 1s ease-in-out";
		line[n - 1].style.animation = "line 5s ease-in-out";
	} if (n === 2) {
		slideIndex = 2;
		slider.style.left = "-100%";
		slider.style.transition = "all 1s ease-in-out";
		line[n - 1].style.animation = "line 5s ease-in-out";
	} if (n === 3) {
		slideIndex = 3;
		slider.style.left = "-200%";
		slider.style.transition = "all 1s ease-in-out";
		line[n - 1].style.animation = "line 5s ease-in-out";
	} if (n === 4) {
		slideIndex = 4;
		slider.style.left = "-300%";
		slider.style.transition = "all 1s ease-in-out";
		line[n - 1].style.animation = "line 5s ease-in-out";
	} if (n === 5) {
		slideIndex = 5;
		slider.style.left = "-400%";
		slider.style.transition = "all 1s ease-in-out";
		line[n - 1].style.animation = "line 5s ease-in-out";
	}
}