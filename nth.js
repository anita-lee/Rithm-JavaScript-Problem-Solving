function nth(arr, num){
  // add whatever parameters you deem necessary - good luck!
  if (num < 0) {
    num = arr.length + num
    return arr[num]; 
  }
  return arr[num]; 
}

//