let header = document.getElementById("menu");

function openNavbar() {
	header.style.left = "0";
	header.style.transition = "all 1.5s ease-in-out";
}
 
function closeNavbar() {
	header.style.left = "-100%";
	header.style.transition = "all 1.5s ease-in-out";
}
 
function clickLink() {
	header.style.left = "-100%";
	header.style.transition = "all 0.75s ease-in-out";
}