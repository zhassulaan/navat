let header = document.getElementById("menu");

function openNavbar() {
	header.style.width = "auto";
	header.style.animation = "animateIn";
	header.style.transition = "all 1.5s ease-in-out";
}
 
function closeNavbar() {
	header.style.width = "0";
	header.style.animation = "animateOut";
	header.style.transition = "all 1.5s ease-in-out";
}
 
function clickLink() {
	header.style.width = "0";
	header.style.animation = "animateOut";
	header.style.transition = "all 0.75s ease-in-out";
}