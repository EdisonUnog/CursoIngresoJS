function mostrar()
{
	//tomo el mes
	var mesDelAño =document.getElementById("txtIdMes").value;
	switch(mesDelAño){
        
		case "Febrero":
			alert("Este mes solo tiene 29 Dias");
			break;

		/*case "Enero":
        case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		case "Julio":
		case "Agosto":
	    case "Septiembre":	
		case"Octubre":
		case"Noviembre":
		case"Diciembre":
		alert("Este mes tiene 30 dias o mas");
		break;*/
     // otra forma
	default:
		alert("Este mes tiene 30 dias o mas");
	
	}
	
}
//FIN DE LA FUNCIÓN