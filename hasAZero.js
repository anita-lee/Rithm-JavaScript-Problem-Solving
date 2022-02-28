function hasAZero(num){
  // add whatever parameters you deem necessary - good luck!
  let numArr = Array.from(String(num), Number); 
  const zero = (digit) => digit === 0; 
  return numArr.some(zero); 
}