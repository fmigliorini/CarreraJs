$(function(){
	$("#numeros").spinner({
		max: 50
	}).val("10");

	$("#rango").slider({
		range:true,
		min: 0,
		max: 50,
		slide: function(event, ui){
			$("#valores").val(ui.values[0] + " - " + ui.values[1]);
		}
	});

	$("#valores").val($("#rango").slider( "values", 1));

	$( "#carros").selectmenu();
});2