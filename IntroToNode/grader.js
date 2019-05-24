const arrSum = arr => arr.reduce((a,b) => a + b, 0);
function average (arr) {
  var sum = arrSum(arr);
  return Math.round(sum / arr.length);
}

var scores = [90, 98, 89, 100, 100, 86, 94];
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];

console.log(average(scores));
console.log(average(scores2));