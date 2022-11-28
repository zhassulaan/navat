console.log(window.offset().top);
console.log("qwf");

// $(function() {
// 	// this applies bg color to your bg elements, instead of css.
// 	let bgs = $('div.bg');
// 	bgs.each(function(index, el) {
// 	  let isEven = (index % 2 == 0);
// 	  if (isEven) {
// 		 $(el).addClass('black');
// 	  } else {
// 		 $(el).addClass('white');
// 	  }
// 	})
//  });
 
//  $(window).on('scroll', function(e) {
// 	  let texts = $('span.link');
// 	  let bgs = $('div.bg');
 
// 	  // nested because each span has different bounds.
// 	  for (let span of texts) {
// 			let span_offset = $(span).offset().top+50;
 
// 			for (let bg of bgs) {
// 				 let offset = $(bg).offset().top;
// 				 if (offset >= span_offset &&
// 					  offset <= span_offset + $(bg).outerHeight()) {
// 					  let isBlack = $(bg).hasClass('black');
// 					  let clr = isBlack ? 'black' : 'white';
// 					  $(span).css('color', clr);
// 				 }
// 			}
// 	  }
//  });