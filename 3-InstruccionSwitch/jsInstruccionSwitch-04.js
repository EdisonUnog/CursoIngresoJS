function mostrar()
{
	//tomo el mes
	var mesDelAño =document.getElementById("txtIdMes").value;
	switch(mesDelAño){
      case "Febrero":
		  alert("Este mes solo tiene 28 dias");
		  break;
	  
    case "Enero":
	case "Marzo":
	case "Mayo":
	case "Julio":
	case "Agosto":
	case "Octubre":
	case "Diciembre":
		alert("Este mes tiene 31 Dias");
		break;
		
	case "Abril":
	case "Junio":
	case "Septiembre":
	case "Noviembre":
		alert("Este mes tiene 30 Dias");
		break;
	}
	
	



}//FIN DE LA FUNCIÓN