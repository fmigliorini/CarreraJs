$(document).ready(function(){ //$(function(){});
	$("#div1").position({
		my: "right bottom",
		at: "right bottom",
		of: "#elementoObjetivo",
	});
	$("#div2").position({
		// POSICION INCIAL DEL ELEMENTO
		my: "	right bottom",
		// 	POSICION DEL EMENTO OBJETIVO
		at: "left top",
		of: "#elementoObjetivo",
	});
	$("#div3").position({
		my: "center",
		at: "center",
		of: "#elementoObjetivo",
	});
});
	