/* # Eliminar un elemento del DOM */

/* Usar la lista provista en el HTML para eliminar el elemento de la lista cuando el usuario presiona sobre el tacho de basura. */

$(window).keydown(keyDownPress)

var counter = 0

function keyDownPress(event) {
  var keyCode = event.keyCode
  console.log(keyCode)
  switch (keyCode) {
    case 27:
      console.log('Salir de pantalla completa')
      break
    case 32:
      console.log('Pausar video')
      break
  }
}