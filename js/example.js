// Run the script on DOM ready:
$(function(){
	$('input').customInput();
	
	$('.toggle').each(function(){
		$('div:first',this).addClass('first');
		$('div:last',this).addClass('last');	
	}); 
	
});