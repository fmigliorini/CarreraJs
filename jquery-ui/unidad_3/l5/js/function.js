$(document).ready(function(){
	$("#efecto").selectmenu();
	$("#boton1").click(function(){
		var distance = parseInt($("#miInput").val());
		var efecto = $("#efecto :selected").val();
		$("#miDiv1").hide(efecto,1000,function(){
			$(this).show(efecto,1000);
		});
	});
});