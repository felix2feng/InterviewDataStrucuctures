/* Sorting Algorithms
- TradeOffs between sorting Algorithms include
--- Speed / Runtime
--- Space 
--- Stability
*/

const bubbleSort = (array) => {
 for (var i = 0; i < array.length; i++) {
  for (var j = i; j < array.length - 1; j++) {
    if (array[j] > array[j + 1]) {
      var temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
    }
  }
 }
 return array;
}

const insertionSort = (array) => {
  for (var i = 0; i < array.length; i++) {
    var j = 1;
    while (j > 0 && array[i] < array[i - 1]) {
      j--;
      var 
    }
  }
}

const quickSort = array => {
  // Pick a pivot, then create two arrays (1 lower, 1 upper), then recursively call
  var pivot = array[0];
  var leftArray = [];
  var rightArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] <= pivot) {
      leftArray.push(array[i]);
    } else {
      rightArray.push(array[i]);
    }
  }
  return quickSort(leftArray).concat([pivot], quickSort(rightArray));
}

const radixSearch = array => {
  
}