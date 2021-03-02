function mostrar()
{
  let estacion=document.getElementById("txtIdEstacion").value;
  let destino=document.getElementById("txtIdDestino").value;
  switch(estacion){
	  case "Invierno":
		  if( destino == "Bariloche"){
			  alert("se puede viaja");
		  }else{
			  alert("No se puede viaja");
		  }
		  break;

	  case "Verano":
		  if(destino == "Mar del plata" || destino == "Cataratas"){
			  alert("Se puede viajar");
		  }else{
			  alert("No se puede viajar");
		  }
		  break; 

	  case "Otoño":
		  alert("Se puede viajar a todos los destinos");
		  break;
		  
	  case "Primavera":
		  if(destino == "Bariloche"){
			  alert("No se puede viajar");
		  }else{
			  alert("Se puede viajar");
		  }
		  break;
  }


}//FIN DE LA FUNCIÓN

//estrategia de resolucion
//definir las variables
//revelar los datos de entrada (destino/estacion)
//definir el ambito para cada estacion
//dentro de cada ambito del grupo anterior definir un ambito para cada destino
//calculamos el precio final
//informamos el precio final