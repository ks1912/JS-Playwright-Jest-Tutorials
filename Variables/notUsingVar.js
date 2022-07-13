function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    const line = matrix[i];
    console.log(`***${i}***`);
    for (let i = 0; i < line.length; i++) {
      const element = line[i];
      console.log(element);
      console.log(`------***${i}***-----`);
      console.log(element);
      console.log(line.length);
    }
  }
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

printMatrix(matrix);

