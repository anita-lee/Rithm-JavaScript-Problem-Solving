function addKeyAndValue(objArr, key, val){
  // add whatever parameters you deem necessary - good luck!
  objArr.forEach(function(obj) {
    obj[key] = val; 
  })
  return objArr; 
}