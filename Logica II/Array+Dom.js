<!DOCTYPE html>
<html lang="en">

//Implementación de array con manipulacion del dom mediante document.queryselector
  
<input/>
<button>Verificar si acertó con el secreto</button>


</html>

<script>

    //var secreto = Math.round(Math.random()*10);
    var secreto = [3,5,7,9];
    var encontrado = false;
    var input = document.querySelector("input");
    input.focus();

    function verificar(){
        
      for(var posicion = 0 ;posicion < secreto.length; posicion++){  
        if(parseInt(input.value) == secreto[posicion] ){
        alert("Usted acertó");
        encontrado = true;
        break;
        }
       } 
      
       if(encontrado ==  false){
        alert("Usted erró");


       }
    }

       
       
        input.value = "";
        input.focus();
    

    var button = document.querySelector("button");
    button.onclick = verificar;


</script>
