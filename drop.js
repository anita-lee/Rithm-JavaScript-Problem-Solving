function drop(arr, num){
  // add whatever parameters you deem necessary - good luck!
  if (num > arr.length) return []; 
  if (num === undefined) return arr.slice(1,arr.length); 
  
  let newArr = arr.slice(num); 
  
  return newArr; 
}