var gender = prompt('Ingrese su género')
var age = prompt('Ingrese su edad')

var message = 'Hola, '

//GENERO//
switch (gender) {
  case 'male':
    message = message + 'Sr. '
    break
  case 'masculino':
    message = message + 'Sr. '
    break
  case 'female':
    message = message + 'Sra./Srita. '
    break
  case 'femenino':
    message = message + 'Sra./Srita. '
    break
  default:
    message = message + 'Género inválido '
    break
}

//EDAD//
if (age < 18) {
  message = message + 'usted es menor de edad. No puede ingresar.'
} else if (age >= 18) {
  message = message + 'usted es mayor de edad. Puede ingresar.'
}

console.log(message)
