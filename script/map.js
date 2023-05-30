let map;

DG.then(function () {
		map = DG.map('map', {
				center: [43.191557, 76.882657],
				zoom: 18,
		});

		DG.marker([43.191557, 76.882657]).addTo(map).bindPopup('Чайхана NAVAT!');

});
