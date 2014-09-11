var cart_count = 0;
$.ajax({
	type: 'GET',
	url: '/cart.js',
	dataType: 'json',
	success: function(data){
		cart_count = data.item_count;
		console.log(data.item_count);
		boldClearCart();
	}
});

function boldClearCart(){
	$.ajax({
		type: 'POST',
		url: '/cart/clear',
		success: function(){
			$("a[href='/cart']:contains('" + cart_count + "')").each(function(){
				var text_of_element = $(this).html();
				text_of_element = text_of_element.replace(cart_count,'0');
				$(this).html(text_of_element);
			});
		},
		error: function(){
			console.log('error');
		}
	});
}