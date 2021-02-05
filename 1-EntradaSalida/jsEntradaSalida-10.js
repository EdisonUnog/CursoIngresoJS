/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe=parseInt(document.getElementById("txtIdImporte").value);
	let descuento=(25 / 100) * importe;
	let respuesta= importe - descuento ;
	//let respuesta= (importe - descuento).toFixed(2);
	document.getElementById("txtIdResultado").value ="Descuento 25%, tu importe es de: US$" +respuesta.toFixed(2) ;
}
