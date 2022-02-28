function aperture(num, arr){
  if (num > arr.length || num < 1) return [];
  
  let newArr = []; 
  
  for(let i = 0; i <= arr.length - num; i++) {
    let smallArr = arr.slice(i, i+num); 
    newArr.push(smallArr); 
  }
  return newArr; 
} 


