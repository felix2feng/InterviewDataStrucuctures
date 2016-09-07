/* Given a sorted array of integers, return the index of the given key. Return -1 if not found. */
function binarySearch(array, target) {
  var bottom = 0;
  var top = array.length - 1;
  var mid = Math.floor(array.length / 2);
  while (bottom <= top) {
    mid = Math.floor((bottom + top) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] > target) {
      top = mid - 1;
    } else {
      bottom = mid + 1;
    }
  }
  return -1;
}

// console.log(binarySearch([1,2,3,4,5], 1)); // 0
// console.log(binarySearch([1,2,3,4,5], 2)); // 1
// console.log(binarySearch([1,2,3,4,5], 3)); // 2
// console.log(binarySearch([1,2,3,4,5], 4)); // 3
// console.log(binarySearch([1,2,3,4,5], 5)); // 4

function searchSortedArray(array, target) {
  var low = 0
  var high = array.length - 1;
  var mid = Math.floor(array.length / 2);
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (array[mid] ===  target) {
      return mid;
    } else if (target > array[high]) {
      high = mid - 1;
    } else if (target > array[mid]) {
      low = mid + 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}

// var test = [4, 5, 1, 2, 3];
// console.log(searchSortedArray(test, 2)); // 3
// console.log(searchSortedArray(test, 4)); // 0
// console.log(searchSortedArray(test, 5)); // 1

function smallestCommonNumber(array1, array2, array3) {
  var low1 = 0;
  var low2 = 0;
  var low3 = 0;
  while (low1 < array1.length && low2 < array2.length && low3 < array3.length) {
    if (array1[low1] === array2[low2] && array2[low2] === array3[low3]) {
      return array1[low1];
    }
    // Find lowest value and then increment the index of lowest
    var lowest = Math.min(array1[low1], array2[low2], array3[low3]);
    if (array1[low1] === lowest) {
      low1++;
    } else if (array2[low2] === lowest) {
      low2++;
    } else {
      low3++;
    }

  }
  return -1;
}

// var arr1 = [2, 3, 4, 5, 6];
// var arr2 = [-2, 2, 3, 4];
// var arr3 = [-2, -1, 0, 2];
// console.log(smallestCommonNumber(arr1, arr2, arr3));

// Using extra memory
function rotateArray(array, n) {
  // [1,2,3,4,5]
  var reversed = array.reverse();
  // [5,4,3,2,1] <-- Reverse
  var rotatedPart = reversed.slice(0, n).reverse();
  var unrotatedPart = reversed.slice(n).reverse();
  return rotatedPart.concat(unrotatedPart);
  // [4,5,1,2,3] <-- Split arrays by n, then reverse both separately and concat
}

function rotateArrayInPlace(array, n) {
  // Normalize rotations
  n = n % array.length;
  if (n < 0) {
    n = n + array.length;
  }

  reverseArray(array, 0, array.length - 1);
  reverseArray(array, 0, n);
  reverseArray(array, n, array.length - 1);
}

function reverseArray(arr, start, end) {
  while (start < end) {
    var temp = arr[end];
    arr[end] = arr[start];
    arr[start] = temp;
    start++;
    end--;
  }
}

// console.log(reverseArray([1,2,3,4], 0, 2));

function findLowHighIndex(array, target) {
  var high, low;
  // Binary Search to find high
  var bottom = 0;
  var top = array.length - 1;
  var mid = Math.floor(array.length / 2);
  while (bottom <= top) {
    mid = Math.floor((bottom + top) / 2);
    if (array[mid] === target) {
      high = mid;
      bottom = mid + 1;
    } else if (array[mid] > target) {
      top = mid - 1;
    } else {
      bottom = mid + 1;
    }
  }
  // Binary Search to find low
  bottom = 0;
  top = array.length - 1;
  mid = Math.floor(array.length / 2);
  while (bottom <= top) {
    mid = Math.floor((bottom + top) / 2);
    if (array[mid] === target) {
      low = mid;
      top = mid - 1;
    } else if (array[mid] > target) {
      top = mid - 1;
    } else {
      bottom = mid + 1;
    }
  }
  if (high === null && low === null) {
    return -1;  
  }
  return [low, high];

}

// console.log(findLowHighIndex([1,2,2,2,3,4,5,6,6], 3));

function moveZeroesToLeft(array) {
  var zeroes = 0;
  // Delete all zeroes and keep a count
  for (var j = 0; j < array.length; j++) {
    if (array[j] === 0) {
      array.splice(j, 1);
      array.unshift(0);
    }
  }
  return array;
}

// console.log(moveZeroesToLeft([1,2,3,0,1,0]));

function maximumSingleSellProfit(array) {
  var buy = array[0];
  var sell = array[1];
  var profit = sell - buy;
  for (var i = 1; i < array.length; i++) {
    if (array[i] - buy > profit) {
      profit = array[i] - buy;
    }
    if (array[i] < buy) {
      buy = array[i];
    }
  }
  return profit;
}

// console.log(maximumSingleSellProfit([12,5,9,19]));

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  var pivot = array[0];
  var lower = [];
  var higher = [];
  for (var i = 1; i < array.length; i++) {
    if (array[i] <= pivot) {
      lower.push(array[i]);
    } else {
      higher.push(array[i]);
    }
  }
  return quickSort(lower).concat(pivot, quickSort(higher));
}

// console.log(quickSort([2,3,4,51,43,2,1]));

function mergeOverlappingIntervals(array) {
  var result = [];
  var beg = array[0][0];
  var end = array[0][1];

  for (var i = 0; i < array.length; i++) {
    if (array[i][0] > end || i === array.length - 1) {
      result.push([beg, end]);
      beg = array[i][0];
      end = array[i][1];
    } else {
      if (array[i][0] < end) {
        end = Math.max(end, array[i][1]);
      }
    }
  }
  return result;
}

// console.log(mergeOverlappingIntervals([[1,2], [3,7], [4,8]]));

function sumOfTwoValues(array, target) {
  var sorted = array.sort();
  var hashTable = {};
  hashTable[sorted[0]] = true;
  for (var i = 1; i < sorted.length; i++) {
    var reciprocal = target - array[i];
    if (hashTable[reciprocal]) {
      return true;
    }
    hashTable[sorted[i]] = true;
  }
  return false;
}
// console.log(sumOfTwoValues([1,2,3,4,5,8,9], 14));