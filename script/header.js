$(document).ready(function() {
	$('#pagepiling').pagepiling({
    	anchors: ['home', 'about', 'open-kitchen', 'vip', 'interior', 'children', 'locations', 'reserv' ],
    	menu: '#myMenu',
		afterLoad: function(anchorLink, index) {
			const navbar = document.getElementsByClassName("navbar");
			if(anchorLink == 'about' || anchorLink == 'vip' || anchorLink == 'children' || anchorLink == 'reserv' || anchorLink == 'contacts') {
				$(navbar).removeClass("navbar1");
				$(navbar).removeClass("navbar3");
				$(navbar).addClass("navbar4");
			} else if(anchorLink == 'open-kitchen' || anchorLink == 'interior' || anchorLink == 'locations') {
				$(navbar).removeClass("navbar1");
				$(navbar).removeClass("navbar4");
				$(navbar).addClass("navbar3");
			} else if (anchorLink == 'home') {
				$(navbar).removeClass("navbar3");
				$(navbar).removeClass("navbar4");
				$(navbar).addClass("navbar1");
			}
		}
	});
});