/* # Validar el campo email usando jQuery */

/* El formulario deberá validar el campo email verificando que contenga arroba, punto y contenido. Si existe algún error deberá mostrar el campo en rojo */

/* Busco el elemento en el DOM y le asigno la función validateEmailField en el evento blur */
var emailInput = $('#email')

emailInput.blur(validateEmail)

/* Declaro función*/

function validateEmail(event) {
  var inputNode = $(this)

  var value = inputNode.val()

  if (!value || value.indexOf('@') === -1 || value.indexOf('.') === -1) {
    inputNode.removeClass('is-valid')
    inputNode.addClass('is-invalid')
  } else {
    inputNode.removeClass('is-invalid')
    inputNode.addClass('is-valid')
  }
}
