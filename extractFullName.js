function extractFullName(objArr){
  // add whatever parameters you deem necessary - good luck!
  let newArr = objArr.map((obj) => obj.first + " " + obj.last); 
  return newArr; 
}