var slider = document.getElementsByClassName("image-container");
var paragraph = document.getElementsByClassName("paragraph")[0];
var counter = document.getElementsByClassName("counter")[0];

let text = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."];
let numb = ["01", "02", "03"];
let subtitle = ["НАЦИОНАЛЬНАЯ КУХНЯ", "ЕВРОПЕЙСКАЯ КУХНЯ", "ВОСТОЧНАЯ КУХНЯ"];
let box1 = ["ФОТО11", "ФОТО12", "ФОТО13"];
let box2 = ["ФОТО21", "ФОТО22", "ФОТО23"];
let box3 = ["ФОТО31", "ФОТО32", "ФОТО33"];

let a = 0;
function carousel(n) {
	if (a == 0 && n == -1)
		(a = 2);
	else if (a == 2 && n == 1)
		(a = 0);
	else
		(a += n);

	var myHand = false;
	if (myHand) clearTimeout(myHand);
	paragraph.children[0].style.animation = "fade 1.5s ease-in-out";
	paragraph.children[2].style.animation = "fade 1.5s ease-in-out";
	counter.style.animation = "fadeCounter 1.5s ease-in-out";
	slider[0].children[1].style.animation = "fade 1.5s ease-in-out";
	slider[1].children[0].children[0].style.animation = "fade 1.5s ease-in-out";
	slider[0].children[0].children[0].style.animation = "fade 1.5s ease-in-out";
	slider[2].children[0].children[0].style.animation = "fade 1.5s ease-in-out";

	myHand = setTimeout(function() {
		paragraph.children[0].style.animation = '';
		paragraph.children[2].style.animation = '';
		counter.style.animation = '';
		slider[0].children[1].style.animation = '';
		slider[0].children[0].children[0].style.animation = '';
		slider[1].children[0].children[0].style.animation = '';
		slider[2].children[0].children[0].style.animation = '';
	}, 800);
	
	if (a == 0) {
		paragraph.children[0].textContent = text[0];
		paragraph.children[2].textContent = text[1];
		counter.textContent = numb[0];
		slider[0].children[1].textContent = subtitle[0];
		slider[0].children[0].children[0].textContent = box1[0];
		slider[1].children[0].children[0].textContent = box1[1];
		slider[2].children[0].children[0].textContent = box1[2];
	} else if (a == 1) {
		paragraph.children[0].textContent = text[2];
		paragraph.children[2].textContent = text[3];
		counter.textContent = numb[1];
		slider[0].children[1].textContent = subtitle[1];
		slider[0].children[0].children[0].textContent = box2[0];
		slider[1].children[0].children[0].textContent = box2[1];
		slider[2].children[0].children[0].textContent = box2[2];
	} else if (a == 2) {
		paragraph.children[0].textContent = text[4];
		paragraph.children[2].textContent = text[5];
		counter.textContent = numb[2];
		slider[0].children[1].textContent = subtitle[2];
		slider[0].children[0].children[0].textContent = box3[0];
		slider[1].children[0].children[0].textContent = box3[1];
		slider[2].children[0].children[0].textContent = box3[2];
	}
}