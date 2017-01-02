$(document).ready(function(){
	$("#btn1").click(function(){
		$("#myDiv").addClass( "styleTwo", 1000, "easeOutExpo");
	});
	$("#btn2").click(function(){
		$("#myDiv").removeClass("styleTwo",1000, "easeInOutQuint");
	});

	//EJEMPLO 2
	$("#btn3").click(function(){
		$("#parrafo1").addClass("ps1",1000,"easeInCirc");
	});
	$("#btn4").click(function(){
		$("#parrafo1").removeClass("ps1",1000);
	});
});