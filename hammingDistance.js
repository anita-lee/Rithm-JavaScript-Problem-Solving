function hammingDistance(a, b){
  let msg = "Input strings must have the same length."
  if (a.length !== b.length) {
    return msg; 
  }
  let newA = a.toLowerCase(); 
  let newB = b.toLowerCase(); 
  let dist = 0; 

  for (let i = 0; i < newA.length; i++) {
    if(newA[i] !== newB[i]) {
      dist += 1; 
    }
  }
  return dist; 
}