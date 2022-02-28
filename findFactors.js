function findFactors(num){
  // add whatever parameters you deem necessary - good luck!
  let arr = []; 

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) arr.push(i); 
  }
  return arr; 
}

//10%1 === 0
//10%2 === 0
//10%3 === 1
//10
//[1,2,5,10]