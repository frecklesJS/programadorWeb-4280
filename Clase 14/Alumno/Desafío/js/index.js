$(function () {
  var deleteButton = $('.btn-danger')

  deleteButton.click(function () {
    var trNode = $(this).parent().parent()

    trNode.fadeOut(500, function () {
      trNode.remove()
      console.log('Nodo removido')

    })
  })
})
