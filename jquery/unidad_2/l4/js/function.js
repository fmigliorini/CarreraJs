$(document).ready(function(){
	$(document).on("descuento",function(event, total){
		if(total>50000)
			alert("Descuento");
	});

	var cliente={
		id:null,
		nombre:null,
		total:null,

		init: function(config){
			cliente.config = config;
		},

		leerPropiedades: function(){
			return cliente.config;
		}
	}

	$("#registrarCliente").click(function(event){
		event.preventDefault();
		
		config = {
			id:$("#id").val(),
			nombre:$("#nombre").val(),
			total:$("#totalCompra").val()
		}

		cliente.init(config);
		clienteData = cliente.leerPropiedades();
		$(document).trigger("descuento", clienteData.total);

	});

});
