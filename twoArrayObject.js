function twoArrayObject(keyArr, valArr) {
  let obj = {}; 

  for (let i = 0; i < keyArr.length; i++) {
    if(!valArr[i]) obj[keyArr[i]] = null; 
    else obj[keyArr[i]] = valArr[i]; 
  }
  return obj; 
}