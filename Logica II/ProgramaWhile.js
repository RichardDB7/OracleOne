<meta charset="UTF-8">

<h1>PROGRAMA - AÑO DE MUNDIAL </h1>

<script>
function saltarLinea() {
        document.write("<br>");
        document.write("<br>");
    }

    function imprimir(frase) {
        document.write(frase);
        saltarLinea();
    }

    var anhoMundial = 1930;
    var limite = parseInt(prompt("Ingrese el año límite para calcular"))
    

    while (anhoMundial <= limite){
    imprimir("Hubo mundial de la FIFA en el año" + anhoMundial)
    anhoMundial = anhoMundial + 4;
    }

    alert("fin")


</script>
