let header = document.getElementById("menu");

function openNavbar() {
	header.style.top = "0";
	header.style.height = "auto";
	header.style.opacity = "1";
	header.style.transition = "all 1.5s ease-in-out";
}
 
function closeNavbar() {
	header.style.top = "-100%";
	header.style.opacity = "0"
	header.style.transition = "all 1.5s ease-in-out";
}
 
function clickLink() {
	header.style.top = "-100%";
	header.style.opacity = "0"
	header.style.transition = "all 0.75s ease-in-out";
}