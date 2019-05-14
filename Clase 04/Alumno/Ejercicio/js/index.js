/*# Crear una función que calcule el promedio de un array

- Debe recibir como parámetro un array de números y devolver el calculo del promedio de todos los números.
- Probar la función.*/

//Array//
var examResults = [7, 5, 6, 4, 3, 2, 8]

//Creo función en base al array de números//
function arrayAverage(examResults) {
  //Creo una variable para almacenar la suma de las notas y otra para calcular el promedio//
  var sumResults
  var prom = 0
  //Recorro el array y sumo las notas en SumResults//
  for (var i = 0; i < examResults.length; i++) {
    value = examResults[i]
    prom = prom + value
  }
  //Calculo el promedio//
  prom = prom / examResults.length
  //Devuelvo el resultado del promedio//
  return prom
}

//Uso la función para el resultado//
var result = arrayAverage(examResults)

//Muestro el resultado en consola//
console.log('El promedio del resultado de los exámenes es: ' + result)

