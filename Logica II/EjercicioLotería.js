<script>
    //  Crea una función de lotería que reciba un número n y sortee un número entre 0 a n,
    //  retornando ese valor. De esta forma, en vez de escribir 
    //  var numeroPensado = Math.round(Math.random()*n);, 
    //  escribirás var numeroPensado = sortea(n);. 
    //  Realiza esa modificación, creando una nueva función y utilízala de forma correcta.

    function saltarLinea() {
        document.write("<br>");
    }

    function imprimir(frase) {
        document.write(frase);
        saltarLinea();
    }

    function loteria(n){
       return Math.round(Math.random()*n);   
    }

    var numeroSorteo = loteria(10);
    var intentos = 3;
    var contador = 1;
   
    while(contador <= intentos){

    var numeroLanzado = parseInt(prompt("Ingrese un numero entre 1 y 10"));

    if(numeroSorteo == numeroLanzado) {
        alert("Usted acertó en el intento" + intentos);
        break;  
         }

    else{
        alert("Usted erró, el numero era" +" "+ numeroSorteo)
        }
        contador++;
    }       

    if(numeroSorteo == numeroLanzado) {
        imprimir("Usted acertó en el intento" + intentos);
        
         }

    else{
        imprimir("Usted erró, el numero era" +" "+ numeroSorteo)
        }




</script>   
