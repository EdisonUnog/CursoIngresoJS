function mostrar()
{
	//tomo el mes
	var mesDelAño=document.getElementById("txtIdMes").value;
	/*
	switch(mesDelAño){
		case "Enero":
			alert("Falta para el invierno..!!");
			break;
		case "Febrero":
			alert("Falta para el invierno..!!");
			break;
		case "Marzo":
			alert("Falta para el invierno..!!");
			break;
		case "Abril":
			alert("Falta para el invierno..!!");
			break;
		case "Mayo":
			alert("Falta para el invierno..!!");
			break;
		case "Junio":
			alert("Falta para el invierno..!!");
			break;
		case "Julio":
			alert("Abrigate que hace frio...!!");
			break;
		case "Agosto":
			alert("Abrigate que hace frio...!!");
			break;
		case "Septiembre":
			alert("Ya paso el invierno..!!");
			break;
		case "Octubre":
			alert("Ya paso el invierno..!!");
			break;
		case "Noviembre":
			alert("Ya paso el invierno..!!");
			break;
		case "Diciembre":
			alert("Ya paso el invierno..!!");
			break;
	}
  */
 // Otra forma
    switch(mesDelAño){
		case "Enero":
		case "Febrero":
        case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("Falta para el invierno...!!");
			break;
        case "Julio":
			alert("Abrigate que hace frio...!!");
			break;
		case "Agosto":
			alert("Abrigate que hace frio...!!");
			break;
		case"Septiembre":	
		case"Octubre":
		case"Noviembre":
		case"Diciembre":
		alert("Ya paso el invierno...!!")
		break;
	}



}//FIN DE LA FUNCIÓN