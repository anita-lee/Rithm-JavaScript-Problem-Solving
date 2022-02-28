function extractValue(arr, key){
  let newArr = []; 

  for (let obj of arr) {
    for (let k in obj){
      if(k === key) {newArr.push(obj[key]); 
      }
    }
  }
  return newArr; 
}

