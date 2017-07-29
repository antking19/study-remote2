 $(function(){
 	$(".upList li").click(function(){
 		$(".upList li").removeClass('activeLi');
 		$(this).addClass("activeLi");
 		var x = $(this).index() + 1;
 		$(".boxList li").removeClass('active');
 		$(".boxList li:nth-child("+x+")").addClass('active');
 	});
}) ;
 