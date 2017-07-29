 $(function(){
 	$(".imgArea").append("<img src='' class='photo'/>");
 	
 	var dem1 = 1;
 	/* Next */
 	$(".next").click(function(){
 		
 		var endImg = $(this).parent().prev().children().length-1;
 		var imgArea = $(".imgArea img:nth-child("+dem1+")").attr("src"); 		
 		console.log("so luong anh: " + endImg);

 		$(this).parent().prev().children('.photo').attr({src:imgArea}); 		

 		if(dem1==endImg){
 			dem1=0;
 		}
 		dem1++;
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
 