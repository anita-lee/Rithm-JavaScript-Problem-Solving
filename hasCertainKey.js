function hasCertainKey(objArr, key){
  // add whatever parameters you deem necessary - good luck!
  return objArr.every((obj) => key in obj); 
}