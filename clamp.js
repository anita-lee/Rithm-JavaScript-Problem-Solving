function clamp(num, lower, upper){
  // add whatever parameters you deem necessary - good luck!
  if(num === lower && num === upper) return num; 
  if(num > lower && num < upper) return num; 
  if(num < lower) return lower; 
  if(num > upper) return upper; 
}