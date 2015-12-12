$(document).ready(function(){
	$(document).on('keypress', function(e){
		if(e.keyCode == '109'){ //press the M key for the modal
			showModalAd();
		}
	});

	$(document).on("keyup", function(e){
		if(e.keyCode == '27'){
			window.location = "#";
		}
	});

	$(document).on("click", ".menuButton", toggleMenu);
});

var showModalAd = function(){
	window.location = "#openModal";
}

var toggleMenu = function(){
	var menuButton = $(this),
		menu = $(".menu ol");
	menuButton.toggleClass("shown");
	menu.toggle();
}