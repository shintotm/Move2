var main = function() {
	$('div.login').click(function() {
		$('div.dropdown-menu').toggle();
	});
	
	$(function() {
		$('#accordion').accordion();
	});
};

$(document).ready(main);