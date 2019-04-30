console.log('init app')


var examResults = [7, 5, 6, 4, 3, 2, 8]
var averageResult = calcAverage(examResults)

function calcAverage(numbersArray) {
  var total = 0
  var numbers
  for (var i = 0; i < numbersArray.length; i++) {
    numbers = numbersArray[i]
    total = total + numbers
  }
  var result = total / numbersArray.length

  return result
}



