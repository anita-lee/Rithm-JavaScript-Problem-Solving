function greatestCommonDivisor(a, b){
  // add whatever parameters you deem necessary - good luck!
  for (let i = b; i > 0; i--) {
    if(a % i === 0 && b % i === 0) {
      return i; 
    }
  }
}