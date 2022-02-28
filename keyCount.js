function keyCount(objArr) {
  let newObj = {}; 

  for (let obj of objArr){
    for(let key in obj) {
      if (newObj[key]) {
        newObj[key] += 1  
        console.log(newObj)
      } else {
        newObj[key] = 1; 
      }
    }
  }
  return newObj; 
}

/*keyCount([
  { name: "Elie", catOwner: false },
  { name: "Moxie", isCat: true },
]); // { name: 2, catOwner: 1, isCat: 1}

keyCount([
  { age: 1, eyeColor: "blue" },
  { age: 3, eyeColor: "brown" },
  { age: 7, inSchool: true },
]); // { age: 3, eyeColor: 2, inSchool: 1 }*/
