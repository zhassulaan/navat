const element = document.getElementById("main");
const navbar = document.getElementsByClassName("navbar");
const height = window.innerHeight;

$(element).scroll(function() {
	if ($(element).scrollTop() < height) {
		$(navbar).removeClass("navbar3");
		$(navbar).removeClass("navbar4");
		$(navbar).addClass("navbar1");
	} else if ($(element).scrollTop() < 2 * height) {
		$(navbar).removeClass("navbar1");
		$(navbar).removeClass("navbar3");
		$(navbar).addClass("navbar4");
	} else if ($(element).scrollTop() < 5 * height) {
		$(navbar).removeClass("navbar1");
		$(navbar).removeClass("navbar4");
		$(navbar).addClass("navbar3");
	} else if ($(element).scrollTop() < 6 * height) {
		$(navbar).removeClass("navbar1");
		$(navbar).removeClass("navbar3");
		$(navbar).addClass("navbar4");
	}
});