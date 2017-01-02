$(document).ready(function(){ //$(function(){});
	$("#btn1").click(function(event){
		$("#div1").switchClass("estilo1","estilo2",2000,"easeInOutBounce");
		$("#div1").switchClass("estilo2","estilo1",2000,"easeInOutBounce"); // Para que el btn sea reutilizable.
	});
});
	