function printMatrix(matrix) {
  for (var i = 0; i < matrix.length; i++) {
    var line = matrix[i];
    console.log(`***${i}***`);
    for (var i = 0; i < line.length; i++) {
      var element = line[i];
      console.log(`------***${i}***-----`);
      console.log(element);
      console.log(line.length);
    }
  }
}

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

printMatrix(matrix);