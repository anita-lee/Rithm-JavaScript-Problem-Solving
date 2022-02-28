function zipObject(arr1, arr2){
  // add whatever parameters you deem necessary - good luck!
  let obj = {}; 

  for(let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = arr2[i]; 
  }
  return obj; 
}