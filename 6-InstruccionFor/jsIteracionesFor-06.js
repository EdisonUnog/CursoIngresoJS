function mostrar()
{
 let numero;
 let contador=0;

    numero=parseInt(prompt("ingrese un numero positivo"));
    while(isNaN(numero) || numero<=0){
	  numero=parseInt(prompt("Error. ingrese un numero positivo"));
  }
    for(let i=1; i<=numero; i++){
      if(i%2==0){
		  console.log(i);
		  contador++;
	  }
  }
   console.log("cantidad de pares encontrados: " + contador);


}//FIN DE LA FUNCIÓN