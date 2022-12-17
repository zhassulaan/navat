let interior_counter = document.getElementById("counter-interior");
let interior_img1 = document.getElementById("imageI1");
let interior_img11 = document.getElementById("imageI11");
let interior_img2 = document.getElementById("imageI2");
let interior_img12 = document.getElementById("imageI12");
let interior_img3 = document.getElementById("imageI3");
let interior_img13 = document.getElementById("imageI13");
let interior_img4 = document.getElementById("imageI4");
let interior_img14 = document.getElementById("imageI14");

let interior_numbs = ["01", "02", "03", "04"];
let interior_imgs = [interior_img1.src, interior_img2.src, interior_img3.src, interior_img4.src];

let interiorIndex = 0;
let interiorIndex1 = 1;
let interiorIndex2 = 2;
let interiorIndex3 = 3;

function plusSlideI(n) {
	if (interiorIndex == 0 && n == -1)
		interiorIndex = 3;
	else if (interiorIndex == 3 && n == 1)
		interiorIndex = 0;
	else
		interiorIndex += n;

	if (interiorIndex == 0) {
		interiorIndex1 = 1;
		interiorIndex2 = 2;
      interiorIndex3 = 3;
	} else if (interiorIndex == 1) {
		interiorIndex1 = 2;
		interiorIndex2 = 3;
		interiorIndex3 = 0;
	} else if (interiorIndex == 2) {
		interiorIndex1 = 3;
		interiorIndex2 = 0;
		interiorIndex3 = 1;
	} else if (interiorIndex == 3) {
		interiorIndex1 = 0;
		interiorIndex2 = 1;
		interiorIndex3 = 2;
	}

	let iHand = false;
	if (iHand) clearTimeout(iHand);

	interior_counter.style.animation = "fadeCounter 0.5s ease-in-out";
	interior_img1.style.width = "0";
	interior_img1.style.marginLeft = "100%";
	interior_img11.src = interior_imgs[interiorIndex];
	interior_img11.style.width = "100%";
	interior_img1.style.transition = "all 0.8s ease-in-out";
	interior_img11.style.transition = "all 0.8s ease-in-out";
	interior_img2.style.width = "0";
	interior_img2.style.marginLeft = "100%";
	interior_img12.src = interior_imgs[interiorIndex1];
	interior_img12.style.width = "100%";
	interior_img2.style.transition = "all 0.8s ease-in-out";
	interior_img12.style.transition = "all 0.8s ease-in-out";
	interior_img3.style.width = "0";
	interior_img3.style.marginLeft = "100%";
	interior_img13.src = interior_imgs[interiorIndex2];
	interior_img13.style.width = "100%";
	interior_img3.style.transition = "all 0.8s ease-in-out";
	interior_img13.style.transition = "all 0.8s ease-in-out";
	interior_img4.style.width = "0";
	interior_img4.style.marginLeft = "100%";
	interior_img14.src = interior_imgs[interiorIndex3];
	interior_img14.style.width = "100%";
	interior_img4.style.transition = "all 0.8s ease-in-out";
	interior_img14.style.transition = "all 0.8s ease-in-out";
	

	iHand = setTimeout(function() {
		interior_counter.style.animation = '';
		interior_img1.src = interior_img11.src;
		interior_img1.style.marginLeft = "0";
		interior_img1.style.width = "100%";
		interior_img11.style.width = "0";
		interior_img1.style.transition = "none";
		interior_img11.style.transition = "none";
		interior_img2.src = interior_img12.src;
		interior_img2.style.marginLeft = "0";
		interior_img2.style.width = "100%";
		interior_img12.style.width = "0";
		interior_img2.style.transition = "none";
		interior_img12.style.transition = "none";
		interior_img3.src = interior_img13.src;
		interior_img3.style.marginLeft = "0";
		interior_img3.style.width = "100%";
		interior_img13.style.width = "0";
		interior_img3.style.transition = "none";
		interior_img13.style.transition = "none";
		interior_img4.src = interior_img14.src;
		interior_img4.style.marginLeft = "0";
		interior_img4.style.width = "100%";
		interior_img14.style.width = "0";
		interior_img4.style.transition = "none";
		interior_img14.style.transition = "none";
	}, 800);

	interior_counter.textContent = interior_numbs[interiorIndex];
}