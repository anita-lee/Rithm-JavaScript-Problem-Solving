function takeRight(arr,val = 1){
  // add whatever parameters you deem necessary - good luck!
  let newArr = []; 

  if (val > arr.length) val = arr.length; 

  for (let i = 1; i <= val; i++) {
    newArr.push(arr.pop()); 
  }
  return newArr.reverse(); 
}