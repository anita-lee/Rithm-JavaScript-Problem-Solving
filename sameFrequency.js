function sameFrequency(n1, n2){
  // add whatever parameters you deem necessary - good luck!
  let obj = {}; 
  let obj2 = {}; 
  const num1 = Array.from(String(n1)); 
  const num2 = Array.from(String(n2)); 

  if (num1.length !== num2.length) return false; 

  for (num of num1) {
    if (!obj.num) {
      obj.num = 1; 
    } else {
      obj.num++
    }
  }

  for (num of num2) {
    if (!obj2.num) {
      obj2.num = 1; 
    } else {
      obj2.num++
    }
  }

  for (let i=0; i < obj.length; i++) {
    if (obj[i][0] !== obj2[i][0]) {
      return false; 
    }
    if (obj[i][1] !== obj2[i][1]) {
      return false; 
    }
  }
  return true; 
}