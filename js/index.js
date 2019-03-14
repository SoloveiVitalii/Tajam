$ (function (){
	$(".gallery").slice(0, 2).show();
	$("#loadMore").on('click', function(e) {
		e.preventDefault();
		$(".gallery:hidden").slice(0, 2).slideDown();
	})
})