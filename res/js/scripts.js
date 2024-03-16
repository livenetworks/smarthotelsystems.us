// var wrap = $("header");

// wrap.on("scroll", function(e) {

// 	if (this.scrollTop > 147) {
// 	wrap.addClass("opaque");
// 	} else {
// 	wrap.removeClass("opaque");
// 	}


// });


$(window).scroll(function() {
	if ($(window).scrollTop() > 100) {
		$('header').addClass('opaque');
	}
	else {
		$('header').removeClass('opaque');
	}
})