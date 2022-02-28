function hasOnlyOddNumbers(arr){
  // add whatever parameters you deem necessary - good luck!
  const odd = (num) => num % 2 === 1
  
  return arr.every(odd); 
}