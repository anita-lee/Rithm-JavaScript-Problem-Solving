function validAnagram(a, b){
  let aArr = a.split(''); 
  let bArr = b.split(''); 

  aArr.sort(); 
  let newA = aArr.join(''); 

  bArr.sort(); 
  let newB = bArr.join(''); 

  return newA === newB; 
}