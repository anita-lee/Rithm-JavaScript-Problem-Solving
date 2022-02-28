function upperFirst(str){
  // add whatever parameters you deem necessary - good luck!
  let newStr = ""; 

  for (let i = 0; i < str.length; i++)
    if (i === 0) newStr += (str[0].toUpperCase()); 
    else newStr += str[i]; 
  return newStr;
}