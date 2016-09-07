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

const mergeSort = array => {
  if (array.length === 1) {
    return array;
  }
  var mid = Math.floor(array.length / 2);

  var lower = mergeSort(array.slice(0, mid));
  var higher = mergeSort(array.slice(mid));

  // Merge the splitting of arrays
  var result = [];
  while (lower.length && higher.length) {
    var lowerFirst = lower[0];
    var higherFirst = higher[0];
    if (lowerFirst < higherFirst) {
      result.push(lower.shift());
    } else {
      result.push(higher.shift());
    }
  }

  if (lower.length) {
    result = result.concat(lower);
  }

  if (higher.length) {
    result = result.concat(higher);
  }

  return result;
}

const bucketSort = array => {

}

const iterativeRadixSearch = array => {
  var queue = [];
  for (var i = 0; i < 10; i++) {
    queue.push([]);
  }

  // Sort numbers < 1000
  var significance = 1;
  var maxSignificance = 100;
  while (significance <= maxSignificance) {
    while (array.length) {
      var current = array.shift();
      var significantDigit = Math.floor(current / significance);
      queue[significantDigit % 10].push(current);
    }

    for (var k = 0; k < queue.length; k++) {
      for (var l = 0; l < queue[k].length; l++) {
        array.push(queue[k][l]);
      }
    }
    significance = significance * 10;
    for (var i = 0; i < 10; i++) {
      queue[i] = [];
    }
  }
  return array;
}
