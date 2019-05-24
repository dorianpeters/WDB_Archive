function printReverse(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

function isUniform(arr) {
  var firstItem = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (firstItem !== arr[i])
      return false;
  }
  return true;
}

function sumArray(arr) {
  var sum = 0;
  arr.forEach(function(item) {
    sum += item;
  });
  return sum;
}

function max(arr) {
  var max = arr[0];
  arr.forEach(function(item){
    if (item > max)
      max = item;
  }); 
  return max;
}

function myForEach(arr, func) {
  for (var i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}