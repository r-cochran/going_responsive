$(document).ready(function(){
	$(document).on('keypress', function(e){
		if(e.keyCode == '109'){ //press the M key for the modal
			showModalAd();
		}
	});
});

var showModalAd = function(){
	window.location = "#openModal";
}