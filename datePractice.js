function displayToday() {
  // add whatever parameters you deem necessary - good luck!
  return new Date(); 
}

function isWeekend(dateObj) {
  // add whatever parameters you deem necessary - good luck!
  if (dateObj.getDay() === 6 || dateObj.getDay() === 0) {
    return true; 
  } 
  return false; 
}

function displayMonthName(dateObj) {
  // add whatever parameters you deem necessary - good luck!
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  return months[dateObj.getMonth()]; 
}