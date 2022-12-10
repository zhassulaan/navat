var feature = document.getElementById("feature");

function selectNumber(id) {
	var box = document.getElementById(id);
	
	for (let i = 0; i < feature.children.length; i++)
		feature.children[i].classList.remove("active-btn");
	box.classList.add("active-btn");
}