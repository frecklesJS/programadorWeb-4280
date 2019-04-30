var operation = prompt('Ingrese la operación a realizar')

var number1 = prompt('Ingrese el primer número')
var parsedNumber1 = parseFloat(number1, 10)


do {
  number2 = prompt('Ingrese el segundo número')
  var parsedNumber2 = parseFloat(number2, 10)
} while (operation === 'div' && parsedNumber2 === 0)

var result

switch (operation) {
  case 'suma':
    result = parsedNumber1 + parsedNumber2
    break

  case 'resta':
    result = parsedNumber1 - parsedNumber2
    break

  case 'multiplicación':
    result = parsedNumber1 * parsedNumber2
    break

  case 'multiplicacion':
    result = parsedNumber1 * parsedNumber2
    break

  case 'división':
    result = parsedNumber1 / parsedNumber2
    break

  case 'division':
    result = parsedNumber1 / parsedNumber2
    break

  default:
    result = 'Operación Incorrecta'
    break
}

var message = 'El resultado de la ' + operation + ' es: ' + result

console.log(message)