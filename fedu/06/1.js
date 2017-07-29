$(function(){
	$hieuung = $('.descriptionArea').isotope({
	  itemSelector: '.imgArea',
	  layoutMode: 'masonry'
	});

	$hieuung.imagesLoaded().progress( function() {
		$hieuung.isotope('layout');
	});

	//xu ly nut trong div.danhmuc
	$('.danhmuc a').click(function(){
		$('.danhmuc a').removeClass("active");
		$(this).addClass("active"); // het xu ly chuyen mau

		tendanhmuc = $(this).attr('href');
		//console.log(tendanhmuc);

		$hieuung.isotope({filter:tendanhmuc})

		return false;
	});
});