/* # Eliminar un elemento usando una animación de jQuery */

/* La función `removeElementWithAnimation` tiene que recibir como parámetro un Id y eliminar el elemento usando en conjunto una animación de jQuery para que el cambio no sea tan brusco. */

$(document).ready(function () {
  $('button').on('click', removeElementWithAnimation)

  /* Función que recibe un evento y elimina el nodo con una animación */
  function removeElementWithAnimation(event) {
    $(this).parent().parent().hide(2000, function () {
      $(this).remove()
    })
  }
})
