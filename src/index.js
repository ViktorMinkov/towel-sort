
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  console.log(matrix)
 
  if (matrix === [] || matrix === undefined) {
    return [];
  }
  for (let i = 0; i <matrix.length; i++) {
    for(let j = 0;j <matrix[i].length;j++) {
      let columnIndex ;
        if(i % 2 === 0) {
          columnIndex = j;
        }else {
          columnIndex = (matrix[i].length - 1 - j)
        }
        result.push(matrix[i][columnIndex])
    }
  }
  console.log(result)

  return result;
}
