module.exports = function towelSort(matrix) {
  if ((Array.isArray(matrix)) == false) { return []; }
  else if (matrix.length == 0) { return []; }
  else {
      if (matrix.length == 1) {
          return matrix[0];
      }
      else if (matrix.length == 2) {
          return matrix[0].concat(matrix[1].reverse());
      }
      else if (matrix.length == 3) {
          return matrix[0].concat(matrix[1].reverse()).concat(matrix[2]);
      }
      else if (matrix.length == 4) {
          return matrix[0].concat(matrix[1].reverse()).concat(matrix[2]).concat(matrix[3].reverse());
      }
  }
}