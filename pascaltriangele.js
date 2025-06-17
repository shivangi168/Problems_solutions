function generatePascalsTriangle(n) {
  let triangle = [];

  for (let row = 0; row < n; row++) {
    let currentRow = [];

    for (let col = 0; col <= row; col++) {
      
      if (col === 0 || col === row) {
        currentRow.push(1);
      } else {
       
        const val = triangle[row - 1][col - 1] + triangle[row - 1][col];
        currentRow.push(val);
      }
    }

    triangle.push(currentRow);
  }

  return triangle;
}
const result = generatePascalsTriangle(5);
console.log(result);
m