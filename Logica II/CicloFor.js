<meta charset="UTF-8">

<h1>PROGRAMA - CALCULAR LA TABLA DE MULTIPLICAR </h1>

<script>
function saltarLinea() {
        document.write("<br>");
        document.write("<br>");
    }

    function imprimir(frase) {
        document.write(frase);
        saltarLinea();
    }
for(var multiplicador = 1;multiplicador <= 10;multiplicador = multiplicador + 1){
        imprimir(6 * multiplicador);
    }


</script>
