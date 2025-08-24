//usage of map
let hobbies = ["Reading", "Traveling", "Gaming"];

hobbies.map((hobbies) =>{
    console.log(hobbies);
});

//deconstructing objects
const person = {
    name: "Alice",
    age: 30,
}

let {name, age} = person

console.log(person);

//spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5];

const combined = [...arr1, ...arr2];
console.log(combined);

