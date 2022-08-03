<script>

	function saltarLinea(){//Funcion de salto linea
		document.write("<br>");
		document.write("<br>");
		document.write("<br>");	
	}
	function imprimir(frase){//Funcion de impresion con paso de parametros
		document.write(frase);
		saltarLinea();
	}	

	var anho = 2025;

	imprimir("ORACLE ONE");
	
	imprimir("Juan tiene:" + (anho - 2000) +" "	+ "años");

	imprimir("Pedro tiene:" + (anho - 1995)  +" "+"años");

	anho = 2030;
	
	imprimir("Carlos tiene:" + (anho - 2005) +" "+"años");
	

</script>
