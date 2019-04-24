

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


for (var i = 0; i < daysOfTheWeek.length; i++) {
  var day = daysOfTheWeek[i]
  var message = 'El '
}

switch (day) {
  case 'Lunes':
  case 'lunes':
  case 'Martes':
  case 'martes':
  case 'Miércoles':
  case 'Miercoles':
  case 'miércoles':
  case 'miercoles':
  case 'Jueves':
  case 'jueves':
  case 'Viernes':
  case 'viernes':
    message = message + day + ' es día de semana'
    break

  case 'Sábado':
  case 'sábado':
  case 'Sabado':
  case 'sabado':
  case 'Domingo':
    message = message + day + ' es día de semana'
    break

  case 'Pato':
    message = day + ' no es un día válido'
    break
}




