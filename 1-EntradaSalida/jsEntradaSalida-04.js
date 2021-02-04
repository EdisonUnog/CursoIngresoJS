/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre=prompt("escribe tu nombre");
	document.getElementById("txtIdNombre").value ="Bienvenido " +nombre;

	/*otro metodo
	document.getElementById("txtIdNombre").value = prompt("escribe tu nombre");
	 */
}

//txtIdNombre