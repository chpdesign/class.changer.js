$(window).resize(function(){
	$('[data-class-changer]').each(function(){
		var classer = $(this).data('class-changer');
		var w = $(window).innerWidth();
		if(w < 768 && classer['col-xs'] != undefined)
		{
			$(this).addClass(classer['col-xs']);
			$(this).removeClass(classer['col-sm']);
			$(this).removeClass(classer['col-md']);
			$(this).removeClass(classer['col-lg']);
		}
		else if(w >= 768 && w < 992 && classer['col-sm'] != undefined)
		{
			$(this).addClass(classer['col-sm']);
			$(this).removeClass(classer['col-xs']);
			$(this).removeClass(classer['col-md']);
			$(this).removeClass(classer['col-lg']);
		}
		else if(w <= 992 && classer['col-md'] != undefined)
		{
			$(this).addClass(classer['col-md']);
			$(this).removeClass(classer['col-xs']);
			$(this).removeClass(classer['col-sm']);
			$(this).removeClass(classer['col-lg']);
		}
		else if(w >= 1200 && classer['col-lg'] != undefined)
		{
			$(this).addClass(classer['col-lg']);
			$(this).removeClass(classer['col-xs']);
			$(this).removeClass(classer['col-md']);
			$(this).removeClass(classer['col-md']);
		}
	});
});
$(window).resize();
