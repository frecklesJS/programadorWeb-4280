/* # Validar un formulario usando jQuery */

/* El formulario deberá contar con los siguientes campos y validarlo la primera vez cuando el usuario pierda el foco, pero a partir de la siguiente validarlo en cada cambio del input usando jQuery para manipular el DOM. */

/*   - Nombre: Deberá tener contenido.
   - Email: Deberá contener arroba, punto y contenido.
   - Comentarios: Deberá tener contenido.

- Si existe algún error deberá mostrar el campo en rojo y un mensaje indicando el tipo de error debajo del input.

- Deberá tener un botón para enviar la información que deberá habilitarse solo si todos los campos son validos. */

// Espero a que el HTML este completamente cargado
$(document).ready(function () {
  // Busco los nodos que voy a utilizar
  var firstNameInputNode = $('#firstName')
  var emailInputNode = $('#email')
  var commentsInputNode = $('#comments')
  var submitButtonNode = $('#submitButton')

  firstNameInputNode.one('blur', validateEmtpyField)

  emailInputNode.one('blur', validateEmailField)

  commentsInputNode.one('blur', validateEmtpyField)

  /* Función que valida que el campo contenga un valor*/

  function validateEmtpyField(event) {
    var inputNode = $(this)

    var errorText = ''
    inputNode.next().remove()

    if (!inputNode.val()) {
      errorText = 'Campo requerido'
    }

    if (errorText) {
      inputNode.addClass('is-invalid')
      inputNode.removeClass('is-valid')

      var parentNode = inputNode.parent()

      parentNode.append('<div class="invalid-feedback">' + errorText + '</div>')
    } else {
      inputNode.addClass('is-valid')
      inputNode.removeClass('is-invalid')
    }

    if (event.type === 'blur') {
      inputNode.on('input', validateEmtpyField)
    }

    validateButton()
  }

  /* Función que valida que el campo sea de tipo email */

  function validateEmailField(event) {
    var inputNode = $(this)

    var errorText = ''

    inputNode.next().remove()

    var value = inputNode.val()

    if (!value) {
      errorText = errorText + 'Campo requerido '
    } else {
      if (value.indexOf('@') === -1) {
        errorText = errorText + 'Debe contener arroba (@) '
      }
      if (value.indexOf('.') === -1) {
        errorText = errorText + 'Debe contener punto (.) '
      }
    }

    if (errorText) {
      inputNode.addClass('is-invalid')
      inputNode.removeClass('is-valid')

      var parentNode = inputNode.parent()

      parentNode.append('<div class="invalid-feedback">' + errorText + '</div>')
    } else {
      inputNode.addClass('is-valid')
      inputNode.removeClass('is-invalid')
    }

    if (event.type === 'blur') {
      inputNode.on('input', validateEmailField)
    }

    validateButton()
  }

  /* validateButton habilita el botón del submit si existen al menos 2 nodos con clase is-valid */

  function validateButton() {
    var validInputNodes = $('.is-valid')

    if (validInputNodes.length === 3) {
      submitButtonNode.attr('disabled', false)
    } else {
      submitButtonNode.attr('disabled', true)
    }
  }
})
