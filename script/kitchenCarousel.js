
var counter = document.getElementById("counter");
var subtitle = document.getElementById("subtitle");
var image1 = document.getElementById("image1");
var image21 = document.getElementById("image21");
var image2 = document.getElementById("image2");
var image22 = document.getElementById("image22");
var image3 = document.getElementById("image3");
var image23 = document.getElementById("image23");

let numbs = ["01", "02", "03"];
let subs = ["НАЦИОНАЛЬНАЯ КУХНЯ", "ЕВРОПЕЙСКАЯ КУХНЯ", "ВОСТОЧНАЯ КУХНЯ"];
let imgs = [image1.src, image2.src, image3.src];

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

	counter.style.animation = "fadeCounter 0.5s ease-in-out";
	subtitle.style.animation = "fadeCounter 0.3s ease-in-out";
	image1.style.width = "0";
	image1.style.marginLeft = "100%";
	image21.src = imgs[kitchenIndex];
	image21.style.width = "100%";
	image1.style.transition = "all 0.8s ease-in-out";
	image21.style.transition = "all 0.8s ease-in-out";
	image2.style.width = "0";
	image2.style.marginLeft = "100%";
	image22.src = imgs[kitchenIndex1];
	image22.style.width = "100%";
	image2.style.transition = "all 0.8s ease-in-out";
	image22.style.transition = "all 0.8s ease-in-out";
	image3.style.width = "0";
	image3.style.marginLeft = "100%";
	image23.src = imgs[kitchenIndex2];
	image23.style.width = "100%";
	image3.style.transition = "all 0.8s ease-in-out";
	image23.style.transition = "all 0.8s ease-in-out";
	

	myHand = setTimeout(function() {
		counter.style.animation = '';
		subtitle.style.animation = '';
		image1.src = image21.src;
		image1.style.marginLeft = "0";
		image1.style.width = "100%";
		image21.style.width = "0";
		image1.style.transition = "none";
		image21.style.transition = "none";
		image2.src = image22.src;
		image2.style.marginLeft = "0";
		image2.style.width = "100%";
		image22.style.width = "0";
		image2.style.transition = "none";
		image22.style.transition = "none";
		image3.src = image23.src;
		image3.style.marginLeft = "0";
		image3.style.width = "100%";
		image23.style.width = "0";
		image3.style.transition = "none";
		image23.style.transition = "none";
	}, 800);

	counter.textContent = numbs[kitchenIndex];
	subtitle.textContent = subs[kitchenIndex];
	// image1.children[0].textContent = imgs[kitchenIndex];
	// image2.children[0].textContent = imgs[kitchenIndex1];
	// image3.children[0].textContent = imgs[kitchenIndex2];
}