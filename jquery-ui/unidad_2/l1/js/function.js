$(document).ready(function(){
	var icono = {
		header : "ui-icono-circle-arrow-e",
		activeHeader : "ui-icon-circle-arrow-s"
	}

	$("#acordeon")
		.accordion({
			collapsible: true,
			//icons: icono,
			header: "div h3"
		})
		.sortable({
			axis: "y",
			handle: "h3",	
			stop:function(event, ui){
				ui.item.children("h3").triggerHandler("focusout");
				//$(this).accordion("refresh");
			}
		});

	var valores = [
		"camerun",
		"Colombia",	
		"Chile",
		"croacia"
	];	

	$("#autocomplete").autocomplete({
		source: valores
	});

});