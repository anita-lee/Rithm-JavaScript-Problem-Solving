function rangeInArray(array, startIdx=0, endIdx=array.length-1){
  // add whatever parameters you deem necessary - good luck!
  let sum = 0; 

  if (endIdx > array.length-1) endIdx = array.length-1; 

  for (let i=startIdx; i<=endIdx; i++) {
    sum += array[i]; 
  }
  return sum; 
}