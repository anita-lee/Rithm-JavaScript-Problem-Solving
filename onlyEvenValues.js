function onlyEvenValues(arr){
  // add whatever parameters you deem necessary - good luck!
  let newArr = []; 

  arr.forEach((val) => {
    if (val % 2 === 0) {
      newArr.push(val) 
    }
  });
  return newArr; 
}