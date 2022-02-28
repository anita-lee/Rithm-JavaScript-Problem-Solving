function vowelCount(str){
  // add whatever parameters you deem necessary - good luck!
  let lowerStrArr = str.toLowerCase().split(""); 
  let vowels = "aeiou"; 
  let obj = {}; 

  lowerStrArr.forEach(function(char) {
    if (vowels.indexOf(char) !== -1){
      if (obj[char]) {
        obj[char]++;  
      } else {
        obj[char] = 1
      }
    }
  });
  return obj; 
}