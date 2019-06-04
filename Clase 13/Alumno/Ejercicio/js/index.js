/* # Mostrar un contandor en pantalla manejado por teclado */

/* Crear un contador que se vaya incrementando al presionar las flechas de arriba y abajo del teclado, siguiendo la siguiente lógica:
   - Empezar en cero.
   - Si el usuario presiona Enter tiene que empezar de nuevo.
   - Sumar uno si el usuario presiona arriba.
   - Restar uno si el usuario presiona abajo. */

$(window).keydown(keyDownPress)

var counter = 0

function keyDownPress(event) {
  var keyCode = event.keyCode
  console.log(keyCode)

  switch (keyCode) {
    case 13:
      counter = 0
      break
    case 38:
      counter++
      break
    case 40:
      counter--
      break
  }
  $('#counter').html(counter)
}