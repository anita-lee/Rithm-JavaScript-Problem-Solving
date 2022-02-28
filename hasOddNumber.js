function hasOddNumber(arr){
  // add whatever parameters you deem necessary - good luck!
  const odd = (num) => num % 2 !== 0; 
  return arr.some(odd); 
}