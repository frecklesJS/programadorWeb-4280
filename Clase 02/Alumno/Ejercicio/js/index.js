/*Crear un programa que muestre si un día es fin de semana según un dato ingresado por el usuario*/

/*Pedir al usuario mediante `prompt` que ingrese un día de la semana y mostrar en consola un mensaje si el día es fin de semana, hábil o no es un día valido.*/

var dayOfTheWeek = prompt('Ingrese un día de la semana')

var message

switch (dayOfTheWeek) {
  case 'Lunes':
  case 'lunes':
  case 'LUNES':
  case 'Martes':
  case 'martes':
  case 'MARTES':
  case 'Miércoles':
  case 'miércoles':
  case 'Miercoles':
  case 'miercoles':
  case 'MIERCOLES':
  case 'MIÉRCOLES':
  case 'Jueves':
  case 'jueves':
  case 'JUEVES':
  case 'Viernes':
  case 'viernes':
  case 'VIERNES':

    message = 'Es día de semana'
    break;

  case 'Sábado':
  case 'sabado':
  case 'SÁBADO':
  case 'SABADO':
  case 'Domingo':
  case 'domingo':
  case 'DOMINGO':

    message = 'Es fin de semana'
    break;

  default:
    message = 'No es un día válido'
    break;
}

console.log(message)