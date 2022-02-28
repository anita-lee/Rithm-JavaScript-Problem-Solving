function take(array, val=1){
  // add whatever parameters you deem necessary - good luck!
  if (val > array.length) val = array.length; 

  let newArr = array.slice(0, val); 

  return newArr; 
}