(function(){
	// bigmenu dropdown
	$('#train_prog').on('click',function(e){
		e.preventDefault();
		$('.big_menu_wrapper').slideToggle();
	});

	// bigsubmenu dropdown
	//$('.big_sub_menu').hide();
	$('.sub_child_menus').hide();
	$('.big_menu ul li a').on('click',function(e){
		e.preventDefault();
		var this_id 		= $(this).attr('id');
		//alert(this_id);
		var menu_data_id 	= $('.sub_child_menus').attr("data-id");
		var menu_data_id 	= $(".big_menu").find("[data-id='" + this_id + "']");

		var content = $(menu_data_id).html();
		//alert(content);
		$('.big_sub_menu').html(content);
		$('.big_sub_menu').slideDown();
		
		


		// var pm = $('#pm').html();
		// $('.big_sub_menu').html(pm);
		// $('#IT').slideDown();
	});

	// add or remove current class in big menu left ul
	$('.big_menu ul li a').on('click',function(e){
		$('.big_menu ul li a').not(this).removeClass('current');
		$(this).addClass('current');
	});

	//add or remove menu_active class in overview section
	
	$('.checkout_menu a').on('click',function(e){
		e.preventDefault();
		$('.checkout_menu a').not(this).removeClass('menu_active');
		$('.checkout_menu a').not(this).next('h4').css("color", "#089292");
		$(this).addClass('menu_active');
		var aichFour  = $(this).next('h4');
		aichFour.css("color", "#E05038");
	});

	$('.overview_list').addClass('show');
	$('#overview').on('click',function(e){
		e.preventDefault();
		$('.payment_sec').removeClass('show');
		$('.varification_sec').removeClass('show');
		$('.thank_sec').removeClass('show');
		$('.overview_list').addClass('show');
	});

	$('#payment').on('click',function(e){
		e.preventDefault();
		$('.overview_list').removeClass('show');
		$('.varification_sec').removeClass('show');
		$('.thank_sec').removeClass('show');
		$('.payment_sec').addClass('show');
	});

	$('#varify').on('click',function(e){
		e.preventDefault();
		$('.overview_list').removeClass('show');
		$('.payment_sec').removeClass('show');
		$('.thank_sec').removeClass('show');
		$('.varification_sec').addClass('show');
	});

	$('#thank').on('click',function(e){
		e.preventDefault();
		$('.overview_list').removeClass('show');
		$('.payment_sec').removeClass('show');
		$('.varification_sec').removeClass('show');
		$('.thank_sec').addClass('show');
	});

})(jQuery)