$(document).ready(function(){
	
	$("#btn1").click(function(){
		$("#div1").animate({
			color:"white",
			backgroundColor: "green",
			borderTopColor:"blue"
		});
	});

	/* EMJEMPLO 2*/

	$("#nombre").blur(function(){
		if($("#nombre").val().trim().length==0){
			$("#nombre").animate({
				outLineColor: "black",
				backgroundColor: "red"

			});
		}else{
			$("#nombre").animate({
				outLineColor: "black",
				backgroundColor: "white"
			});
		}
	});

	$("#apellido").blur(function(){
		if($("#apellido").val().trim().length==0){
			$("#apellido").animate({
				outLineColor: "black",
				backgroundColor: "red"

			});
		}else{
			$("#apellido").animate({
				outLineColor: "black",
				backgroundColor: "white"
			});
		}
	});

	$("#btn2").click(function(){
		$("#nombre").val("");
		$("#apellido").val("");
		alert("DATOS ENVIADOS EXITOSAMENTE");
	});

	$("#textArea").focus(function(){
		$("#textArea").animate({
			color: "#FBFB1C",
			backgroundColor: "25D91F"
		});
	});

	$("#textArea").blur(function(){
		$(this).animate({
			color: "red",
			backgroundColor: "FF5CE7"
		});
	});


});







