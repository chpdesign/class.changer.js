$(window).resize(function(){
	$('[data-class-changer]').each(function(){
		var classer = $(this).data('class-changer');
		var w = $(window).innerWidth();
		if(w < 768 && classer['col-xs'] != undefined)
		{
			$(this).removeClass(classer['col-sm']);
			$(this).removeClass(classer['col-md']);
			$(this).removeClass(classer['col-lg']);
			$(this).addClass(classer['col-xs']);
		}
		else if(w >= 768 && w < 992 && classer['col-sm'] != undefined)
		{
			$(this).removeClass(classer['col-xs']);
			$(this).removeClass(classer['col-md']);
			$(this).removeClass(classer['col-lg']);
			$(this).addClass(classer['col-sm']);
		}
		else if(w >= 992 && classer['col-md'] != undefined)
		{
			$(this).removeClass(classer['col-xs']);
			$(this).removeClass(classer['col-sm']);
			$(this).removeClass(classer['col-lg']);
			$(this).addClass(classer['col-md']);
		}
		else if(w >= 1200 && classer['col-lg'] != undefined)
		{
			$(this).removeClass(classer['col-xs']);
			$(this).removeClass(classer['col-md']);
			$(this).removeClass(classer['col-md']);
			$(this).addClass(classer['col-lg']);
		}
	});
});
$(window).resize();
