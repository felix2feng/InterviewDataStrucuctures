function segment(x, arr) {
    var mins = [];
    
    var window = [];
    for (var i = 0; i < x; i++) {
        window.push(arr[i]);
    }
    mins.push(findMin(window));
    
    for (var j = x; j < arr.length; j++) {
        window.shift();
        window.push(arr[j]);
        mins.push(findMin(window));
        console.log(window);
    }
    // console.log(mins);
    return findMax(mins);
}

function findMin(array) {
    var min = array[0];
    for (var a = 1; a < array.length; a++) {
        if (array[a] < min) {
            min = array[a];
        }
    }
    return min;
}

function findMax(array) {
    var max = array[0];
    for (var b = 1; b < array.length; b++) {
        if (array[b] > max) {
            max = array[b];
        }
    }
    return max;
}

var test1 = 3;
var array1 = [2,5,4,6,8];
// console.log(segment(test1, array1));

var test2 = 1;
var array2 = [1,2,3,1,2];
console.log(segment(test2, array2));