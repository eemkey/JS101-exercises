let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
//{ Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }


let flintstonesObj = {};
flintstones.forEach((character, idx) => {
  flintstonesObj[character] = idx;
});

console.log(flintstonesObj);