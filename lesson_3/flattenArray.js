let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

console.log(flintstones);

let newFlintstonesArr = [].concat(...flintstones);

console.log(newFlintstonesArr);

