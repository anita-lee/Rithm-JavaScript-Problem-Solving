function pick(obj, keyArr){
  // add whatever parameters you deem necessary - good luck!
  let newObj = {}; 

  for (let key of keyArr) {
    if (Object.keys(obj).includes(key)) newObj[key] = obj[key]; 
  }
  return newObj; 
}