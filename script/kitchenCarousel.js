let kitchen_counter = document.getElementById("counter-kitchen");
let kitchen_img1 = document.getElementById("imageK1");
let kitchen_img11 = document.getElementById("imageK11");
let kitchen_img2 = document.getElementById("imageK2");
let kitchen_img12 = document.getElementById("imageK12");
let kitchen_img3 = document.getElementById("imageK3");
let kitchen_img13 = document.getElementById("imageK13");
let kitchen_img4 = document.getElementById("imageK4");
let kitchen_img14 = document.getElementById("imageK14");

let kitchen_numbs = ["01", "02", "03", "04"];
let kitchen_imgs = [kitchen_img1.src, kitchen_img2.src, kitchen_img3.src, kitchen_img4.src];

let kitchenIndex = 0;
let kitchenIndex1 = 1;
let kitchenIndex2 = 2;
let kitchenIndex3 = 3;

function plusSlideK(n) {
	if (kitchenIndex == 0 && n == -1)
		kitchenIndex = 3;
	else if (kitchenIndex == 3 && n == 1)
		kitchenIndex = 0;
	else
		kitchenIndex += n;

	if (kitchenIndex == 0) {
		kitchenIndex1 = 1;
		kitchenIndex2 = 2;
      kitchenIndex3 = 3;
	} else if (kitchenIndex == 1) {
		kitchenIndex1 = 2;
		kitchenIndex2 = 3;
		kitchenIndex3 = 0;
	} else if (kitchenIndex == 2) {
		kitchenIndex1 = 3;
		kitchenIndex2 = 0;
		kitchenIndex3 = 1;
	} else if (kitchenIndex == 3) {
		kitchenIndex1 = 0;
		kitchenIndex2 = 1;
		kitchenIndex3 = 2;
	}

	let kHand = false;
	if (kHand) clearTimeout(kHand);

	kitchen_counter.style.animation = "fadeCounter 0.5s ease-in-out";
	kitchen_img1.style.width = "0";
	kitchen_img1.style.marginLeft = "100%";
	kitchen_img11.src = kitchen_imgs[kitchenIndex];
	kitchen_img11.style.width = "100%";
	kitchen_img1.style.transition = "all 0.8s ease-in-out";
	kitchen_img11.style.transition = "all 0.8s ease-in-out";
	kitchen_img2.style.width = "0";
	kitchen_img2.style.marginLeft = "100%";
	kitchen_img12.src = kitchen_imgs[kitchenIndex1];
	kitchen_img12.style.width = "100%";
	kitchen_img2.style.transition = "all 0.8s ease-in-out";
	kitchen_img12.style.transition = "all 0.8s ease-in-out";
	kitchen_img3.style.width = "0";
	kitchen_img3.style.marginLeft = "100%";
	kitchen_img13.src = kitchen_imgs[kitchenIndex2];
	kitchen_img13.style.width = "100%";
	kitchen_img3.style.transition = "all 0.8s ease-in-out";
	kitchen_img13.style.transition = "all 0.8s ease-in-out";
	kitchen_img4.style.width = "0";
	kitchen_img4.style.marginLeft = "100%";
	kitchen_img14.src = kitchen_imgs[kitchenIndex3];
	kitchen_img14.style.width = "100%";
	kitchen_img4.style.transition = "all 0.8s ease-in-out";
	kitchen_img14.style.transition = "all 0.8s ease-in-out";
	

	kHand = setTimeout(function() {
		kitchen_counter.style.animation = '';
		kitchen_img1.src = kitchen_img11.src;
		kitchen_img1.style.marginLeft = "0";
		kitchen_img1.style.width = "100%";
		kitchen_img11.style.width = "0";
		kitchen_img1.style.transition = "none";
		kitchen_img11.style.transition = "none";
		kitchen_img2.src = kitchen_img12.src;
		kitchen_img2.style.marginLeft = "0";
		kitchen_img2.style.width = "100%";
		kitchen_img12.style.width = "0";
		kitchen_img2.style.transition = "none";
		kitchen_img12.style.transition = "none";
		kitchen_img3.src = kitchen_img13.src;
		kitchen_img3.style.marginLeft = "0";
		kitchen_img3.style.width = "100%";
		kitchen_img13.style.width = "0";
		kitchen_img3.style.transition = "none";
		kitchen_img13.style.transition = "none";
		kitchen_img4.src = kitchen_img14.src;
		kitchen_img4.style.marginLeft = "0";
		kitchen_img4.style.width = "100%";
		kitchen_img14.style.width = "0";
		kitchen_img4.style.transition = "none";
		kitchen_img14.style.transition = "none";
	}, 800);

	kitchen_counter.textContent = kitchen_numbs[kitchenIndex];
}