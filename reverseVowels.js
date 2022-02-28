function reverseVowels(s){
  const len = s.length; 
  const str = [...s]; 
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']; 
  let rev = []; 
  
  for (let i = 0; i < len; i++) {
    if (vowels.includes(s[i])) { 
      rev.push(s[i]); 
    }
  }
  for (let i=0; i<len; i++) {
    if (vowels.includes(str[i])) {
      str[i] = rev.pop(); 
    }
  }
  return str.join(''); 
}

