function union(...arr){
  let mergedArray = [...arr].flat(); 
  let holdArr = [] 

  for(let i = 0; i < mergedArray.length; i++) {
    let x = mergedArray[i]; 
    if (!holdArr.includes(x)) {
      holdArr.push(x); 
      mergedArray.slice(1); 
    }
  }
  return holdArr; 
}