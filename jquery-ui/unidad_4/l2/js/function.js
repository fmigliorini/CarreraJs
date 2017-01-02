$(document).ready(function(){ //$(function(){});
	$("#btn1").click(function(event){
		$("#div1").toggle("fold",1000);
	});
	$("#btn2").click(function(event){
		$("#div2").toggleClass("estilo2",3000,"easeInBounce");
	});
});
	