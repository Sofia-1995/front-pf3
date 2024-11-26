// 1. Calcular el area de un Rectángulo
function calcularAreaRectangulo(longitud, ancho) {
  return longitud * ancho;
}

console.log("Funcion calcular area del rectangulo");
console.log("Solucion a 5 x 3");
console.log(calcularAreaRectangulo(5, 3));
console.log("Solucion 35 x 5");
console.log(calcularAreaRectangulo(35, 5));
console.log("Solucion 98 x 2");
console.log(calcularAreaRectangulo(98, 2));

/* Realizo una funcion para calcular el area recibiendo por paramentro
longitud y área, y adentro de la funcion realizo un return con longitud * area porque
es la formula para calcular el area de un rectangulo.
*/

// 2. Contar palabras en una cadena
function contarPalabras(cadena) {
  return cadena.split(" ").length;
}

console.log("-----------------------------");
console.log("Funcion contar palabras");
console.log("Solucion a 'Humahuaca es un lugar copado'");
console.log(contarPalabras("Humahuaca es un lugar copado"));
console.log("Solucion a 'Hola como estas'");
console.log(contarPalabras("Hola como estas"));
console.log("Solucion a 'Hoy hace mucho calor'");
console.log(contarPalabras("Hoy hace mucho calor"));

/* Para la funcion de contar palabras recibo por paramentro "cadena" y la ejecuto
con return cadena.split esto hace que convierta el string (texto) a array (lista)
utilizando como referencia un caracter para saber donde termina una palabra y donde comienza
la otra. En este caso el caracter espacio es " ".
Una vez obtenida la lista llamo a la propiedad length para saber cuantos elementos contiene
(palabras).
 */

// 3. Invertir una cadena
function invertirCadena(cadena) {
  return cadena.split("").reverse().join("");
}

console.log("-----------------------------");
console.log("Funcion invertir cadena");
console.log("Solucion a 'hola'");
console.log(invertirCadena("hola"));
console.log("Solucion a 'lugar copado'");
console.log(invertirCadena("lugar copado"));
console.log("Solucion a 'buenas tardes'");
console.log(invertirCadena("buenas tardes"));

/* Para invertir una cadena paso por parametro "cadena" y con return ejecuto la funcion
invirtiendo la cadena con split para convertir el texto en una lista
de caracteres y luego reverse para invertir el orden de los elementos en una lista.
Para terminar la funcion join realiza el procedimiento opuesto a split convirtiendo la lista
de caracteres en una cadena.
*/

// 4. Encontrar el palíndromo
function esPalindromo(cadena) {
  return cadena == invertirCadena(cadena);
}

console.log("-----------------------------");
console.log("Funcion palindromo");
console.log("Solucion a 'reconocer'");
console.log(esPalindromo("reconocer"));
console.log("Solucion a 'rallador'");
console.log(esPalindromo("rallador"));
console.log("Solucion a 'neuquen'");
console.log(esPalindromo("neuquen"));

/* Para saber si una palabra es palindromo uso la funcion anterior de "invertirCadena"
para obtener la palabra invertida y compararla con la palabra original y devolver true o
false dependiendo si coinciden o no.
 */

// 5. Crear un programa para convertir la edad de un perro a años humanos
function edadCanina() {
  let edad = prompt("Cual es tu edad?");
  return edad * 7;
}

console.log("-----------------------------");
console.log(edadCanina());

/* Para crear un programa que devuelva la edad humana en años de un perro
guardo en una variable edad el valor ingresado por el usuario atraves de prompt.
Y luego lo multiplico por 7 para encontrar el resultado final.
*/
