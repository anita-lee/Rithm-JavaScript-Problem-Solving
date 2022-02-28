function findInObj(objArr, key, val){
  return objArr.filter((obj) => obj[key] === val)[0]; 
}