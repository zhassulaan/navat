var paragraph = document.getElementById("paragraph");
var counter = document.getElementById("counter");
var subtitle = document.getElementById("subtitle");
var image1 = document.getElementById("image1");
var image2 = document.getElementById("image2");
var image3 = document.getElementById("image3");

let texts = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."];
let numbs = ["01", "02", "03"];
let subs = ["НАЦИОНАЛЬНАЯ КУХНЯ", "ЕВРОПЕЙСКАЯ КУХНЯ", "ВОСТОЧНАЯ КУХНЯ"];
let imgs = [image1.children[0].textContent, image2.children[0].textContent, image3.children[0].textContent];

let kitchenIndex = 0;
let kitchenIndex2 = 1;
let kitchenIndex3 = 2;
function carousel(n) {
	if (kitchenIndex == 0 && n == -1)
		kitchenIndex = 2;
	else if (kitchenIndex == 2 && n == 1)
		kitchenIndex = 0;
	else
		kitchenIndex += n;

	if (kitchenIndex == 0) {
		kitchenIndex1 = 1;
		kitchenIndex2 = 2;
	} else if (kitchenIndex == 1) {
		kitchenIndex1 = 2;
		kitchenIndex2 = 0;
	} else {
		kitchenIndex1 = 0;
		kitchenIndex2 = 1;
	}

	var myHand = false;
	if (myHand) clearTimeout(myHand);

	paragraph.children[0].style.animation = "fade 0.5s ease-in-out";
	paragraph.children[2].style.animation = "fade 0.5s ease-in-out";
	counter.style.animation = "fadeCounter 0.5s ease-in-out";
	subtitle.style.animation = "fadeCounter 0.3s ease-in-out";
	image1.children[0].style.animation = "fade 0.8s ease-in-out";
	image2.children[0].style.animation = "fade 0.8s ease-in-out";
	image3.children[0].style.animation = "fade 0.8s ease-in-out";

	myHand = setTimeout(function() {
		paragraph.children[0].style.animation = '';
		paragraph.children[2].style.animation = '';
		counter.style.animation = '';
		subtitle.style.animation = '';
		image1.children[0].style.animation = '';
		image2.children[0].style.animation = '';
		image3.children[0].style.animation = '';
	}, 800);

	console.log(kitchenIndex);
	paragraph.children[0].textContent = texts[kitchenIndex];
	paragraph.children[2].textContent = texts[kitchenIndex + 1];
	counter.textContent = numbs[kitchenIndex];
	subtitle.textContent = subs[kitchenIndex];
	image1.children[0].textContent = imgs[kitchenIndex];
	image2.children[0].textContent = imgs[kitchenIndex1];
	image3.children[0].textContent = imgs[kitchenIndex2];
}