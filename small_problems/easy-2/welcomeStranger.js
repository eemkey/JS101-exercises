function greetings(arr, obj) {
  let person = arr.join(" ");
  console.log(`Hello, ${person}! Nice to have a ${obj.title} ${obj.occupation} around.`);
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.