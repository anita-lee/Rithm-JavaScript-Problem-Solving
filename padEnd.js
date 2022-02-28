function padEnd(str, num, pad = ' '){
  // add whatever parameters you deem necessary - good luck!
  if (num <= str.length) return str; 

  let newStr = str; 
  let i = 0; 
  
  while (num > newStr.length) {
    newStr += pad[i]; 
    i++; 
    if (i === pad.length) i = 0; 
  }
  return newStr; 
}

//padEnd("abc", 6, "xyz"); // 'abcxyz'