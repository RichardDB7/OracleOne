/*Calculo de diferencia de edades*/


<script>


function saltarLinea(){//Funcion de salto linea
		document.write("<br>");
			
	}

	function imprimir(frase){//Funcion de impresion con paso de parametros
		document.write(frase);
		saltarLinea();
	}	

	function diferencia(){
		imprimir("<h1>Programa de Resta</h1>");
		saltarLinea();
		var Ricardo = 36;var Daniela=26;
		dif = Ricardo - Daniela;
		imprimir("Ricardo posee:"+" "+Ricardo+" "+"años y Daniela posee:"+" "+Daniela+" "+" "+"años");
		saltarLinea();
		imprimir("Nuestra diferencia de edad es:" + dif);
	}


	diferencia();


</script>
