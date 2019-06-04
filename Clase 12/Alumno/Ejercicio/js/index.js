/* # Crear un ta te ti */

/*Se deberá utilizar el HMTL, CSS e imágenes incluidas en esta carpeta (no es necesario modificar la imagen). */
/* Cada vez que el usuario hace click sobre un cuadrado se tiene que agregar la clase `circle` o la clase `cross`, alternando entre una u otra. */

var player = true

/* busco los nodos con la clase 'square' en el DOM */
var squareNode = $('.square')

/* Agrego a todos los nodos la función squareClick en el evento click */
squareNode.click(squareClick)

/* Declaro la función */
function squareClick(event) {
  var squareNode = $(this)

  if (!(squareNode.hasClass('circle') || squareNode.hasClass('cross'))) {
    if (player) {
      squareNode.addClass('circle')
    } else {
      squareNode.addClass('circle')
    }
    player = !player
  }
}
