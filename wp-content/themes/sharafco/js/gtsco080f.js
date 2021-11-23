// JavaScript Document
jQuery(function($) {
// ---------------------------------------------------------------------------------------------
 // mobile navigation
 $(document).delegate(
    ".mobile-nav-activate, .mobile-nav-close",
    "click",
    function(e) {
      console.log("nav-clicked");
	  $(".mobile-nav").toggleClass("active");
	  e.preventDefault();
	}
  );


// ----- ADD SEARCH FILTER TO MANUFACTURERS -----
if( $('body').hasClass('page-id-13') ) {
	var manuCount = $('.manufacturers-listing > li').length;

	$('.page-id-13').find('.manufacturers-listing').find('li').hide();
	$('.page-id-13').find('.manufacturers-listing').before('<p><input type="text" id="manufcturersSearch" placeholder="Search our manufacturers..." /></p>');
	$('.page-id-13').find('.manufacturers-listing').before('<p><a href="#" class="btn btn-sm all-manufacturers show"><i class="fas fa-list"></i> Show All Manufacturers</a> <a href="#" class="btn btn-sm all-manufacturers hide"><i class="fas fa-list"></i> Hide All Manufacturers</a></p>');
	$(".all-manufacturers.hide").hide();

	$('#manufcturersSearch').keyup(function(){
		var valThis = $(this).val().toLowerCase(),
			allSpeciesOptions = $('.manufacturers-listing > li');
		if(valThis == ""){
			allSpeciesOptions.hide();
			$(".all-manufacturers").show();
		} else {
			allSpeciesOptions.each(function(){
				var el = $(this),
					text = el.text().toLowerCase();
				if(text.indexOf(valThis) == 0){
					el.show();
					$(".all-manufacturers").show();
				} else {
					el.hide();
					$(".all-manufacturers").show();
				}
			});
	   };
	});

	$(document).delegate(
		".all-manufacturers.show",
		"click",
		function(e) {
			$(".all-manufacturers.show").hide();
			$(".all-manufacturers.hide").show();
			$('#manufcturersSearch').val('');
			$('.manufacturers-listing > li').show();

			e.preventDefault();
		}
	);

	$(document).delegate(
		".all-manufacturers.hide",
		"click",
		function(e) {
			$(".all-manufacturers.show").show();
			$(".all-manufacturers.hide").hide();
			$('#manufcturersSearch').val('');
			$('.manufacturers-listing > li').hide();

			e.preventDefault();
		}
	);
}

// ----- ADD SEARCH FILTER TO RESOURCES -----
if( $('body').hasClass('page-id-31') ) {
	$('.page-id-31').find('.resources-listing').before('<p><input type="text" id="resourcesSearch" placeholder="Filter resources..." /></p>');
	$('#resourcesSearch').keyup(function(){
		var valThis = $(this).val().toLowerCase(),
			allSpeciesOptions = $('.resources-listing > li');
		if(valThis == ""){
			allSpeciesOptions.show();
		} else {
			allSpeciesOptions.each(function(){
				var el = $(this),
					text = el.text().toLowerCase();
				if(text.indexOf(valThis) == 0){
					el.show();
				} else {
					el.hide();
				}
			});
	};
	});
}

// ----- HOMEPAGE BRANDS SLIDER -----
if( $('body').hasClass('home') ) {
	// sponsor sidebar rotator
	$(".brands-logos-container .brand-logos").slick({
		rows: 2,
		slidesPerRow: 2,
		// slidesToShow: 2,
		// slidesToScroll: 2,
		speed: 500,
      	prevArrow:"<i class='fas fa-arrow-circle-left'></i>",
      	nextArrow:"<i class='fas fa-arrow-circle-right'></i>",
		cssEase: 'linear',
		responsive: [
			{
				breakpoint: 860,
				settings: {
					rows: 1,
					slidesPerRow: 1
				}
			},
			{
				breakpoint: 520,
				settings: {
					rows: 1,
					slidesPerRow: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	})
	.on('setPosition', function (event, slick) {
		slick.$slides.css('height', slick.$slideTrack.height() + 'px');
	});
}



// ---------------------------------------------------------------------------------------------
});