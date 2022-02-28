function sumUpDiagonals(arr){
  // add whatever parameters you deem necessary - good luck!
  let sum = 0; 
  let n = arr.length;  
  let k = 0


  for (let j = n-1; j >= 0; j--) {
    sum += (arr[j][k]) + (arr[k][k]);
    k++;  
  }
  return sum; 
}
