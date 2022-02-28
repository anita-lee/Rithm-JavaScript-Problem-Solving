function twoArrayDifference(arr1, arr2){
  // add whatever parameters you deem necessary - good luck!
  let newArr = []; 
  for (let num of arr1) {
    if(arr2.includes(num) === false) {
      newArr.push(num); 
    }
  }
  return newArr; 
}