function omit(obj, keyArr){

  return Object.keys(obj)
    .filter(x => !keyArr.includes(x))
    .reduce((acc,key) => ((acc[key] = obj[key]), acc), {}); 
}
