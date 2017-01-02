$(function(){
	$("#btn1").click(function(){
		$.mobile.loader("show",{
			text: "Calculando hipotenusa",
			textVisible: true,
			theme: "a",
			textOnly: false,
			html: ""
		});
		setTimeout(function(){
			var cateto1 = parseInt($("#cateto1").val());
			var cateto2 = parseInt($("#cateto2").val());
			var resultado = Math.sqrt(Math.pow(cateto1,2)+Math.pow(cateto2,2));
			$("#hipotenusa").val(resultado);

			$.mobile.loader("hide");
		},2000);
	});

	$("#btn2").click(function(){
		clearForm();
	});

	function clearForm(){
		$("#cateto1").val("");
		$("#cateto2").val("");
		$("#hipotenusa").val("");	
	}
});
