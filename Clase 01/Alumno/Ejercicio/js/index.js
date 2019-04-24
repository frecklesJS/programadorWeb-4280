/* Pedir nombre mediante `prompt` y mostrarlo en consola junto con algún texto de saludo */
var name = prompt('Dime tu nombre')
console.log('Hola ' + name)


/*Pedir un numero mediante `prompt`, parsearlo, sumarlo a otro que este en una variable y luego mostrar el resultado en consola */
var number1 = prompt('Dime un número')
var number2 = 17
var parsedNumber1 = parseInt(number1, 10)
var parsedNumber2 = parseInt(number2, 10)
var total = parsedNumber1 + parsedNumber2
console.log('El resultado de la suma es ' + total)

/*Pedir un numero mediante `prompt`, parsearlo, restarlo a otro que este en una variable y luego mostrar el resultado en consola*/
var number1 = prompt('Dime un número')
var number2 = 112
var parsedNumber1 = parseInt(number1, 10)
var parsedNumber2 = parseInt(number2, 10)
var total = parsedNumber1 - parsedNumber2
console.log('El resultado de la resta es ' + total)

/*Pedir un numero mediante `prompt`, luego otro, parsearlos y sumarlos, luego mostrar el resultado en consola*/
var number1 = prompt('Dime un número')
var number2 = prompt('Dime otro número')
var parsedNumber1 = parseInt(number1, 10)
var parsedNumber2 = parseInt(number2, 10)
var total = parsedNumber1 + parsedNumber2
console.log('El resultado de la suma es ' + total)