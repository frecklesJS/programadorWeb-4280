/* # Crear una programa que devuelva la operación pedida

- El programa debe:

   - Pedir la operación a realizar.
   - Pedir el primer parámetro y pedir el segundo, en caso de haber elegido división y cero volver a pedir el segundo parámetro hasta que ingrese un numero distinto de cero.*/

//Pido operación a realizar por prompt//
var operation = prompt('Ingrese la operación a realizar: sum, res, mul o div')

//Pido el primer número por prompt y lo guardo en una variable//
var number1 = prompt('Ingrese el primer número')
//Lo parseo//
var parsedNumber1 = parseInt(number1, 10)

//Pido el segundo número por prompt y lo guardo en otra variable//
//Si el número es 0 o la operación divisioón lo pido nuevamente hasta que ingrese algo diferente//
do {
  number2 = prompt('Ingrese el segundo número')
  parsedNumber2 = parseInt(number2, 10)
} while (operation === 'div' && parsedNumber2 === 0)

//Creo una variable para guardar el resultado//
var result

//Realizo la operación ingresada x el usuario//
switch (operation) {
  case 'sum':
    result = parsedNumber1 + parsedNumber2
    break
  case 'res':
    result = parsedNumber1 - parsedNumber2
    break
  case 'mul':
    result = parsedNumber1 * parsedNumber2
    break
  case 'div':
    result = parsedNumber1 / parsedNumber2
    break

  default:
    result = 'Operación Incorrecta'
    break
}

//Creo una variable para guardar el mensaje que mostraré como resultado//
var message = 'El resultado de la ' + operation + ' es: ' + result

//Muestro el resultado en consola//
console.log(message)





