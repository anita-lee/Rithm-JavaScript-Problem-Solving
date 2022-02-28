function linearSearch(arr, val){
  // add whatever parameters you deem necessary - good luck!
  if(!arr.includes(val)) return -1; 

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i; 
    }
  }
}