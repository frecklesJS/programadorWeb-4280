var day = prompt('Dime un día de la semana')

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
    console.log('Es día hábil')
    break

  case 'Sábado':
  case 'sábado':
  case 'Sabado':
  case 'sabado':
  case 'Domingo':
  case 'domingo':
    console.log('Es fin de semana')
    break

  default:
    console.log('No es un día válido')
}