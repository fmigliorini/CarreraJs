    $(document).ready(function() {

        $("#btnSeno").click(function() {

            var numero = parseFloat($("#numero").val());

            var resultado=Math.sin(numero);


            $("#resultado").html("El resultado del seno es: "+resultado);

  

          $('#popupDialogoResultado').popup('open');

          
        });


     

     $("#btnCoseno").click(function() {

             var numero = parseFloat($("#numero").val());

            var resultado=Math.cos(numero);

            $("#resultado").html("El resultado del coseno es: "+resultado);

           $('#popupDialogoResultado').popup('open');

         
          
        });



   $("#btnTangente").click(function() {

         var numero = parseFloat($("#numero").val());

            var resultado=Math.tan(numero);

            $("#resultado").html("El resultado de la tangente es: "+resultado);

              $('#popupDialogoResultado').popup('open');
    
          
        });

       

    })