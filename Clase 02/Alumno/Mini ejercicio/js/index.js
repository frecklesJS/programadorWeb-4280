/*Pedirle mediante `prompt` al usuario que ingrese un número, si el número es par mostrar un mensaje en consola indicando que es par, si no mostrar un mensaje indicando que es impar.*/

var number = prompt('Digite un número')

if (!(number % 2)) {
  console.log('El número es par')
} else {
  console.log('El número es impar')
}