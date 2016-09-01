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

