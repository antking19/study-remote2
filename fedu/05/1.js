 $(function(){

 	$(".imgArea img:nth-child(1)").addClass("active");
 	// $(".imgArea").append("<img src='"+srcFirst+"' class='photo'/>");

 	$(".next").click(function(){
 		var active = $(this).parent().prev().children('.active').index();
 		var endImg = $(this).parent().prev().children().length - 1;

 		console.log("active next: " + active);
 		console.log("endImg next: " + endImg);

 		$(this).parent().prev().children().removeClass('active');
 		$(this).parent().prev().children().eq(active+1).addClass('active');

 		if(active == (endImg)){
 			$(this).parent().prev().children().removeClass('active');
 			$(this).parent().prev().children().eq(0).addClass('active');
 		}
 	});

 	/* prev */
 	$(".prev").click(function(){
 		var active = $(this).parent().prev().children('.active').index();
 		var endImg = $(this).parent().prev().children().length - 1;

 		console.log("active next: " + active);
 		console.log("endImg next: " + endImg);

 		$(this).parent().prev().children().removeClass('active');
 		$(this).parent().prev().children().eq(active-1).addClass('active');

 		if(active == 0){
 			$(this).parent().prev().children().removeClass('active');
 			$(this).parent().prev().children().eq(endImg).addClass('active');
 		}
 	});

 	/* QuickView */
 	$(".eyes").click(function(){
 		$(this).parent().parent().next().addClass('showQuickBox');
 		$(this).parent().parent().next().children().addClass('showQuickBox');
 	});

 	$(".close, .quickViewFull").click(function(){
 		$(".quickViewFull").removeClass('showQuickBox');
 		$(".quickViewBox").removeClass('showQuickBox');
 	});

 	/* keyCode Esc */
 	$(document).keyup(function(e) {
		if (e.keyCode == 27) {
			$(".quickViewFull").removeClass('showQuickBox');
			$(".quickViewBox").removeClass('showQuickBox');
		}
 	});
 });
 