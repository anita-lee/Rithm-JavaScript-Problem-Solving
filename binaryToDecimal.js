function binaryToDecimal(n){
  // add whatever parameters you deem necessary - good luck!
  let sum = 0; 
  let expo = n.length - 1; 

  for (let i = 0; i < n.length; i++) {
    sum += (n[i] * (2 ** expo))
    expo--;  
  }
  return sum; 
}


