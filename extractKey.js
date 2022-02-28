function extractKey(objArr, key){
  // add whatever parameters you deem necessary - good luck!
  let newArr = objArr.map(obj => obj[key]); 
  return newArr; 
}