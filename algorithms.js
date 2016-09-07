function printMatrixInSpiralOrder(arr) {
  var result = [];

  var curr = [0, 0];

  var yLength = arr.length;
  var xLength = arr[0].length;

  var direction = [0, 1];
  var direcCount = 0;

  while (yLength > 0 && xLength > 0) {

    while (curr[0] < yLength && curr[1] < xLength) {
      result.push(arr[curr[0]][curr[1]]);
      console.log(result);
      curr[0] = curr[0] + direction[0];
      curr[1] = curr[1] + direction[1];
    }
    curr[0] = curr[0] - direction[0];
    curr[1] = curr[1] - direction[1];
    direction = [direction[1], -direction[0]];
    direcCount++;
    curr[0] = curr[0] + direction[0];
    curr[1] = curr[1] + direction[1];    
    
    if (direcCount === 3) {
      yLength = yLength - 2;
      xLength = xLength - 2;
      direcCount = 0;
    }
  }

  return result;
}

var testMatrix = [[1,2,3], [8,9,4], [7,6,5]];
console.log(printMatrixInSpiralOrder(testMatrix));