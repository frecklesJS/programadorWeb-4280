/*Pedir al usuario mediante `prompt` que ingrese su género y luego su edad. Luego mostrar un mensaje en consola que diga `Sr.`, `Sra.` o `Sx.`según corresponda y que también evalue si es mayor de edad o no al momento de construir el mensaje.*/

var gender = prompt('Ingrese su género')
var age = prompt('Ingrese su edad')
var name = prompt('Ingrese su nombre')

var message = 'Hola, '

switch (gender) {
  case 'male':
  case 'MALE':
  case 'Male':
  case 'Hombre':
  case 'hombre':
  case 'HOMBRE':
  case 'Masculino':
  case 'masculino':
  case 'MASCULINO':


    message = message + 'Sr. ' + name
    break;

  case 'female':
  case 'FEMALE':
  case 'Female':
  case 'Mujer':
  case 'MUJER':
  case 'Mujer':
  case 'Femenino':
  case 'FEMENINO':
  case 'femenino':

    message = message + 'Sra./Srta. ' + name
    break;

  case 'Other':
  case 'OTHER':
  case 'other':
    message = message + 'Sx. ' + name
    break
}

if (age < 18) {
  message = message + ' usted es menor de edad. No puede ingresar'
} else if (age >= 18) {
  message = message + ' usted es mayor de edad. Puede ingresar.'
}


console.log(message)
