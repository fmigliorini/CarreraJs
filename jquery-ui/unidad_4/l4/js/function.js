$(document).ready(function(){ //$(function(){});

	// EJERCICIO 1
	$.widget("com.miWidget",{
		_create: function() {
			this._inputNumero1 = $("<input>");
			this._inputNumero1.attr("placeholder", "Digite el primer numero");
			this._inputNumero1.css("width","200px");
			this._inputNumero1.css("border-style","solid");
			this._inputNumero1.css("text-align","left");
			this._inputNumero1.css("margin","0 auto");
			$(this.element).append(this._inputNumero1);

			this._inputNumero2 = $("<input>");
			this._inputNumero2.attr("placeholder","Digite el segundo numero");
			this._inputNumero2.css("width","200px");
			this._inputNumero2.css("border-style","solid");
			this._inputNumero2.css("text-align","left");
			this._inputNumero2.css("margin","0 auto");
			$(this.element).append(this._inputNumero2);

			this._operaciones = $("<select>");
			this._operaciones.css("width","200px");

			var operacion1 = document.createElement("option");
			operacion1.text = "Elija una operación..."
			operacion1.value = "";
			
			var operacion2 = document.createElement("option");
			operacion2.text = "Suma";
			operacion2.value = "1";

			var operacion3 = document.createElement("option");
			operacion3.text = "Resta";
			operacion3.value = "2";

			var operacion4 = document.createElement("option");
			operacion4.text = "Multiplicación";
			operacion4.value = "3";

			var operacion5 = document.createElement("option");
			operacion5.text = "división";
			operacion5.value = "4";

			this._operaciones.append(operacion1);
			this._operaciones.append(operacion2);
			this._operaciones.append(operacion3);
			this._operaciones.append(operacion4);
			this._operaciones.append(operacion5);

			$(this.element).append(this._operaciones);
		},

		calcular: function(){
			if (this.validar()) {
				var opcion = parseInt(this._operaciones.val());

				var resultado;
				var numero1;
				var numero2;

				switch (opcion) {
					case 1:
						numero1 = parseInt(this._inputNumero1.val());
						numero2 = parseInt(this._inputNumero2.val());
						resultado = numero1 + numero2;
						alert("El resultado de la suma es : " + resultado );
					break;
					case 2:
						numero1 = parseInt(this._inputNumero1.val());
						numero2 = parseInt(this._inputNumero2.val());
						resultado = numero1 - numero2;
						alert("El resultado de la suma es : " + resultado );
					break;
					case 3:
						numero1 = parseInt(this._inputNumero1.val());
						numero2 = parseInt(this._inputNumero2.val());
						resultado = numero1 * numero2;
						alert("El resultado de la Multiplicación es : " + resultado );
					break;
					case 4:
						numero1 = parseInt(this._inputNumero1.val());
						numero2 = parseInt(this._inputNumero2.val());
						resultado = numero1 / numero2;
						alert("El resultado de la División es : " + resultado );
					break;
				}
			}
		},

		validar: function(){
			var input1 = this._inputNumero1.val().trim().length;
			var input2 = this._inputNumero2.val().trim().length;

			if(input1 == 0 || input2 == 0){
				alert("por favor rellenar los campos");

				$("#miDiv").addClass("estilo2",1000,"easeOutEXpo");
				return false;
			} else {
				$("miDiv").removeClass("estilo2",1000,"easyInBounce");
				return true;
			}
		}


	});
	$("#boton1").click(function(){
		$("#miDiv").miWidget();
	});
	$("#boton2").click(function(){
		$("#miDiv").miWidget("calcular");
	});



	// EJERCICIO 2
	$.widget("com.myDivWidget",{
		_create: function(){
			this._div = $("<div>");
			this._div.text("Mi Div Widget");
			this._div.css("width","200");
			this._div.css("border-style","solid");
			this._div.css("text-align","center");
			this._div.css("margin","0 auto");

			$(this.element).append(this._div);
		},

		animar: function(){
			this._div.css("background-color","red");
			this._div.toggle("pulsate",3000);
		}
	});
	$("#boton3").click(function(){
		$("#miDiv2").myDivWidget();
	});
	$("#boton4").click(function(){
		$("#miDiv2").myDivWidget("animar");
	});

});
