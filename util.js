

module.exports = 
{ 
 
  sumOfMatrices: function (mat1,mat2){ 
    for(let row = 0; row < mat1.length; ++row) { 
        for (let col = 0; col < mat2.length; ++col) { 
           mat1[row][col] += mat2[row][col]; 
        } 
    } 
    return mat1; 
}, 
 
 
 
 
matrixProduct: function(mat1, mat2) { 
  let newMat = []; 
  for (let i = 0; i < mat1.length; i++) { 
      newMat[i] = []; 
      for (let j = 0; j < mat2[0].length; j++) { 
          let sum = 0; 
          for (let k = 0; k < mat1[0].length; k++) { 
              sum += mat1[i][k] * mat2[k][j]; 
          } 
          newMat[i][j] = sum; 
      } 
  } 
  return newMat; 
}, 
      
 
 
sumOfEachRow: function(mat){ 
    let array=[]; 
    for(let i=0; i<mat[0].length; i++){ 
       array.push(this.sumOfArray(mat[i])); 
    } 
     
    return array 
}, 
 
sumOfArray: function(array){ 
    let sum=0; 
    for(let i=0; i<array.length; i++){ 
      sum =sum+array[i]; 
    } 
    return sum; 
} 
 
};
 
 
