$(document).ready(function(){
	$("#efecto").selectmenu();
	$("#boton1").click(function(){
		var distance = parseInt($("#miInput").val());
		var efecto = $("#efecto :selected").val();
		$("#miDiv1").effect(efecto,{
				distance: distance
			},3000,function(){
				$(this).show();
			}
		)
	});
});