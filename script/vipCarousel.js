let vip_counter = document.getElementById("counter-vip");
let vip_img1 = document.getElementById("imageV1");
let vip_img11 = document.getElementById("imageV11");
let vip_img2 = document.getElementById("imageV2");
let vip_img12 = document.getElementById("imageV12");
let vip_img3 = document.getElementById("imageV3");
let vip_img13 = document.getElementById("imageV13");
let vip_img4 = document.getElementById("imageV4");
let vip_img14 = document.getElementById("imageV14");

let vip_numbs = ["01", "02", "03", "04"];
let vip_imgs = [vip_img1.src, vip_img2.src, vip_img3.src, vip_img4.src];

let vipIndex = 0;
let vipIndex1 = 1;
let vipIndex2 = 2;
let vipIndex3 = 3;

function plusSlideV(n) {
	if (vipIndex == 0 && n == -1)
		vipIndex = 3;
	else if (vipIndex == 3 && n == 1)
		vipIndex = 0;
	else
		vipIndex += n;

	if (vipIndex == 0) {
		vipIndex1 = 1;
		vipIndex2 = 2;
      vipIndex3 = 3;
	} else if (vipIndex == 1) {
		vipIndex1 = 2;
		vipIndex2 = 3;
		vipIndex3 = 0;
	} else if (vipIndex == 2) {
		vipIndex1 = 3;
		vipIndex2 = 0;
		vipIndex3 = 1;
	} else if (vipIndex == 3) {
		vipIndex1 = 0;
		vipIndex2 = 1;
		vipIndex3 = 2;
	}

	let vHand = false;
	if (vHand) clearTimeout(vHand);

	vip_counter.style.animation = "fadeCounter 0.5s ease-in-out";
	vip_img1.style.width = "0";
	vip_img1.style.marginLeft = "100%";
	vip_img11.src = vip_imgs[vipIndex];
	vip_img11.style.width = "100%";
	vip_img1.style.transition = "all 0.8s ease-in-out";
	vip_img11.style.transition = "all 0.8s ease-in-out";
	vip_img2.style.width = "0";
	vip_img2.style.marginLeft = "100%";
	vip_img12.src = vip_imgs[vipIndex1];
	vip_img12.style.width = "100%";
	vip_img2.style.transition = "all 0.8s ease-in-out";
	vip_img12.style.transition = "all 0.8s ease-in-out";
	vip_img3.style.width = "0";
	vip_img3.style.marginLeft = "100%";
	vip_img13.src = vip_imgs[vipIndex2];
	vip_img13.style.width = "100%";
	vip_img3.style.transition = "all 0.8s ease-in-out";
	vip_img13.style.transition = "all 0.8s ease-in-out";
	vip_img4.style.width = "0";
	vip_img4.style.marginLeft = "100%";
	vip_img14.src = vip_imgs[vipIndex3];
	vip_img14.style.width = "100%";
	vip_img4.style.transition = "all 0.8s ease-in-out";
	vip_img14.style.transition = "all 0.8s ease-in-out";
	

	vHand = setTimeout(function() {
		vip_counter.style.animation = '';
		vip_img1.src = vip_img11.src;
		vip_img1.style.marginLeft = "0";
		vip_img1.style.width = "100%";
		vip_img11.style.width = "0";
		vip_img1.style.transition = "none";
		vip_img11.style.transition = "none";
		vip_img2.src = vip_img12.src;
		vip_img2.style.marginLeft = "0";
		vip_img2.style.width = "100%";
		vip_img12.style.width = "0";
		vip_img2.style.transition = "none";
		vip_img12.style.transition = "none";
		vip_img3.src = vip_img13.src;
		vip_img3.style.marginLeft = "0";
		vip_img3.style.width = "100%";
		vip_img13.style.width = "0";
		vip_img3.style.transition = "none";
		vip_img13.style.transition = "none";
		vip_img4.src = vip_img14.src;
		vip_img4.style.marginLeft = "0";
		vip_img4.style.width = "100%";
		vip_img14.style.width = "0";
		vip_img4.style.transition = "none";
		vip_img14.style.transition = "none";
	}, 800);

	vip_counter.textContent = vip_numbs[vipIndex];
}