function inRange(n, start, end){
  // add whatever parameters you deem necessary - good luck!
  if (end == undefined) {
    end = start; 
    start = 0; 
  } 
  if (start > end) { 
    let temp = start; 
    start = end; 
    end = temp; 
  }
  if (n > start && n < end) {
    return true; 
  }
  return false; 
}