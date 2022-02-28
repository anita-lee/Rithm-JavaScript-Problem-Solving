function swap(arr, x, y){
  // add whatever parameters you deem necessary - good luck!
  let temp; 

  temp = arr[x]; 
  arr[x] = arr[y]; 
  arr[y] = temp; 

  return arr; 
}