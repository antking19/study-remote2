$(document).ready(function($) {
	$(".mMenu").click(function(){
		$("ul.menuList").toggleClass('showBlock');
		$(this).toggleClass('showZIndex');
	});

	$(".mLang").click(function(){
		$("ul.langList").toggleClass('showBlock');
		$(this).toggleClass('showZIndex');
	});
});