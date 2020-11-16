const matrices = require('./util') 
 
 let mat1 = [ 
     [1,6], 
     [2,4], 
 ] 
  
 let mat2 = [ 
     [3,9], 
     [2,5], 
 ] 
 
 
 
 console.log(matrices.sumOfMatrices(mat1,mat2)) 
 console.log(matrices.matrixProduct(mat1,mat2)) 
 console.log(matrices.sumOfEachRow(mat1));