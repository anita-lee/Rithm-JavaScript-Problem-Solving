function sumLessThan(arr, num){
  // add whatever parameters you deem necessary - good luck!
  let sum = 0; 
  let newArr = arr.filter((val) => val < num); 

  for (let i = 0; i < newArr.length; i++){
    sum += newArr[i]; 
  }

  return sum; 
}