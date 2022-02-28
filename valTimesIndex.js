function valTimesIndex(arr){
  // add whatever parameters you deem necessary - good luck!
  let newArr = arr.map((num) => num * arr.indexOf(num)); 
  return newArr; 
}