function mergeSortedArrays(arr1, arr2){
  let newArr = arr1.concat(arr2); 

  if (newArr.length <= 1) {
    return newArr;
  }
  newArr.sort((a,b) => (a-b)); 
  return newArr; 
}
