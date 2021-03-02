function mostrar() {
	let destino = document.getElementById("txtIdDestino").value;
	let estacion = document.getElementById("txtIdEstacion").value;
	let precioBase=15000;
	let precioFinal;
	let aumento;
	let descuento;
  
  switch (estacion) {
    case "Invierno":
       if(destino == "Bariloche"){
		   aumento = (precioBase *20) /100;
		   precioFinal = precioBase + aumento;
	   }else if(destino == "Mar del plata"){
		   aumento=(precioBase *20) /100;
		   precioFinal = precioBase + aumento;
	   }else{
		aumento = (precioBase *10) /100;
		precioFinal = precioBase - aumento;
	   }
      break;
    //-------------------------------------------
	case "Verano":
		if(destino == "Bariloche"){
			descuento = (precioBase * 20) /100;
		   precioFinal = precioBase + aumento;
		}else if(destino == "Mar del plata"){
			aumento = (precioBase *20) /100;
		   precioFinal = precioBase + aumento;
		}else{
			aumento = (precioBase *10) /100;
		   precioFinal = precioBase + aumento;
		}
	   break;
      // ------------------------------------
    case "Primavera":
	case "Otoño":
		if(destino == "Cordoba"){
			precioBase = precioBase;
		}else{
			aumento = (precioBase*10) /100;
		   precioFinal = precioBase + aumento;
	    }
	   break;
  }
  alert("El precio final es " + precioFinal);

} //FIN DE LA FUNCIÓN

//estrategia de resolucion
//definir las variables
//revelar los datos de entrada (destino/estacion)
//definir el ambito para cada estacion
//dentro de cada ambito del grupo anterior definir un ambito para cada destino
//calculamos el precio final
//informamos el precio final
