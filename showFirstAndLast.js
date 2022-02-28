function showFirstAndLast(arr){
  // add whatever parameters you deem necessary - good luck!
  let newArr = []; 

  arr.forEach(function(word) {
    let firstLet = word[0]; 
    let lastLet = word[word.length - 1]; 
    newArr.push(firstLet + lastLet); 
  })
  return newArr; 
}