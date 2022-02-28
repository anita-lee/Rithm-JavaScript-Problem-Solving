function hasNoDuplicates(arr){
  // add whatever parameters you deem necessary - good luck!
  if(arr.some(x => arr.indexOf(x) !== arr.lastIndexOf(x))) { 
    return false; 
  } 
  return true; 
}
