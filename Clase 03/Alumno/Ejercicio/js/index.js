/*Arraya inicial*/
var daysOfTheWeek = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Sabado',
  'Domingo',
  'Pato'
]

/*Variable para guardar mensaje*/
var message = 'El '

/*Ciclo for que recorre el array*/
for (var i = 0; i < daysOfTheWeek.length; i++) {
  var day = daysOfTheWeek[i]
}

/*Comparo días del Array con todos los casos*/
switch (day) {
  case 'Lunes':
  case 'Martes':
  case 'Miércoles':
  case 'Miercoles':
  case 'Jueves':
  case 'Viernes':
    message = message + day + 'es día de semana'
    break
  case 'Sábado':
  case 'Sabado':
  case 'Domingo':
    message = message + day + 'es fin de semana'
    break
  default:
    message = day + ' no es un día válido'
    break
}

console.log(message)

/*Por algún motivo que no logro detectar solo muestra el default ... No sé qué hice mal*/

