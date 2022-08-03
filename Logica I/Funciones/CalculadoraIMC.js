//Calculadora de indice de masa corporal
<script>

	function promedio(peso,altura){
		
		imc = peso / (altura * altura);
		
		return imc;
		
	}

	saltarLinea();
	var Ricardo = promedio(100,1.80,);
	var Ivo = promedio(90,1.75);
	imprimir("El promedio entre el imc de Ricardo" + "e" + "Ivo"  + "es de" + (Ricardo + Ivo)/2 );

	function calcuarImc(peso,altura,nombre){imc = parseInt(peso) / parseInt((altura * altura));imprimir("El imc de " + nombre + " es de : " + imc)};
	function saltarLinea(){document.write("<br>");}
	function imprimir(frase){document.write(frase);saltarLinea();}	
	
  saltarLinea();
	imcRicardo = calcuarImc(100,1.80,"Ricardo");
	imcIvo = calcularImc(90,1.75,"Ivo");
		
	
		
</script>
