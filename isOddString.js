function isOddString(str){
  // add whatever parameters you deem necessary - good luck!
  let lowerStr = str.toLowerCase(); 
  let count = 0; 

  let ltrs = "abcdefghijklmnopqrstuvwxyz"
 
  for (let char of lowerStr) {
    count += 1 + (ltrs.indexOf(char))
  }
  if (count < 2) return true; 
  
  if(count % 2 === 0) return false; 
  else return true; 
}
