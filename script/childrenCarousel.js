let children_counter = document.getElementById("counter-children");
let children_img1 = document.getElementById("imageC1");
let children_img11 = document.getElementById("imageC11");
let children_img2 = document.getElementById("imageC2");
let children_img12 = document.getElementById("imageC12");
let children_img3 = document.getElementById("imageC3");
let children_img13 = document.getElementById("imageC13");
let children_img4 = document.getElementById("imageC4");
let children_img14 = document.getElementById("imageC14");

let children_numbs = ["01", "02", "03", "04"];
let children_imgs = [children_img1.src, children_img2.src, children_img3.src, children_img4.src];

let childrenIndex = 0;
let childrenIndex1 = 1;
let childrenIndex2 = 2;
let childrenIndex3 = 3;

function plusSlideC(n) {
	if (childrenIndex == 0 && n == -1)
		childrenIndex = 3;
	else if (childrenIndex == 3 && n == 1)
		childrenIndex = 0;
	else
		childrenIndex += n;

	if (childrenIndex == 0) {
		childrenIndex1 = 1;
		childrenIndex2 = 2;
      childrenIndex3 = 3;
	} else if (childrenIndex == 1) {
		childrenIndex1 = 2;
		childrenIndex2 = 3;
		childrenIndex3 = 0;
	} else if (childrenIndex == 2) {
		childrenIndex1 = 3;
		childrenIndex2 = 0;
		childrenIndex3 = 1;
	} else if (childrenIndex == 3) {
		childrenIndex1 = 0;
		childrenIndex2 = 1;
		childrenIndex3 = 2;
	}

	let cHand = false;
	if (cHand) clearTimeout(cHand);

	children_counter.style.animation = "fadeCounter 0.5s ease-in-out";
	children_img1.style.width = "0";
	children_img1.style.marginLeft = "100%";
	children_img11.src = children_imgs[childrenIndex];
	children_img11.style.width = "100%";
	children_img1.style.transition = "all 0.8s ease-in-out";
	children_img11.style.transition = "all 0.8s ease-in-out";
	children_img2.style.width = "0";
	children_img2.style.marginLeft = "100%";
	children_img12.src = children_imgs[childrenIndex1];
	children_img12.style.width = "100%";
	children_img2.style.transition = "all 0.8s ease-in-out";
	children_img12.style.transition = "all 0.8s ease-in-out";
	children_img3.style.width = "0";
	children_img3.style.marginLeft = "100%";
	children_img13.src = children_imgs[childrenIndex2];
	children_img13.style.width = "100%";
	children_img3.style.transition = "all 0.8s ease-in-out";
	children_img13.style.transition = "all 0.8s ease-in-out";
	children_img4.style.width = "0";
	children_img4.style.marginLeft = "100%";
	children_img14.src = children_imgs[childrenIndex3];
	children_img14.style.width = "100%";
	children_img4.style.transition = "all 0.8s ease-in-out";
	children_img14.style.transition = "all 0.8s ease-in-out";
	

	cHand = setTimeout(function() {
		children_counter.style.animation = '';
		children_img1.src = children_img11.src;
		children_img1.style.marginLeft = "0";
		children_img1.style.width = "100%";
		children_img11.style.width = "0";
		children_img1.style.transition = "none";
		children_img11.style.transition = "none";
		children_img2.src = children_img12.src;
		children_img2.style.marginLeft = "0";
		children_img2.style.width = "100%";
		children_img12.style.width = "0";
		children_img2.style.transition = "none";
		children_img12.style.transition = "none";
		children_img3.src = children_img13.src;
		children_img3.style.marginLeft = "0";
		children_img3.style.width = "100%";
		children_img13.style.width = "0";
		children_img3.style.transition = "none";
		children_img13.style.transition = "none";
		children_img4.src = children_img14.src;
		children_img4.style.marginLeft = "0";
		children_img4.style.width = "100%";
		children_img14.style.width = "0";
		children_img4.style.transition = "none";
		children_img14.style.transition = "none";
	}, 800);

	children_counter.textContent = children_numbs[childrenIndex];
}