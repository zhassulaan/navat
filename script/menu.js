let header = document.getElementById("menu");

function openNavbar() {
	header.style.width = "100%";
	header.style.transition = "width 1.5s ease-in-out";
}
 
function closeNavbar() {
	header.style.width = "0";
	header.style.transition = "width 1.5s ease-in-out";
}
 
function clickLink() {
	header.style.width = "0";
	header.style.transition = "width 0.75s ease-in-out";
}