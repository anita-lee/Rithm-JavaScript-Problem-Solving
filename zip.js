function zip(...arr){
  // add whatever parameters you deem necessary - good luck!
  let newArr = []; 
  let smallArr = []; 

  for (let i = 0; i < arr[0].length; i++) {
    for (let j =0; j < arr.length; j++) {
      let element = arr[j][i]; 
      smallArr.push(element);
    }
    newArr.push(smallArr); 
    smallArr = []; 
  }
  return newArr; 
}
