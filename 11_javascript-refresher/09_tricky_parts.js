//testing the difference between === and ==
console.log(5 === '5'); // false, because the types are different
console.log(5 == '5');  // true, because type coercion converts '5' to 5

//example of undefined vs null

let a; //this will be undefined because there is no assigned value
let b = null; //this is explicitly set to have no value

console.log(a); //undefined
console.log(b); //null

//behavior of regular functions vs arrow functions

const obj = {
    name: "John",
    regularFunction: function() {
        console.log("Regular Function 'this':", this.name); // 'this' refers to the object
    },

    arrowFunction: () => {
        console.log("Arrow Function 'this':", this.name); // 'this' does not refer to the object
    }
}

obj.regularFunction(); // John
obj.arrowFunction(); // undefined (or may refer to global object in non-strict mode)

//copying a variable by using =
arr = [1, 2, 3, 4, 5];
arr2 = arr; //this does not create a new array, it just copies the reference

const arr3 = [...arr2]; //as the arr3 output shows, there are no changes to the arrays since arr2 references arr unless we use .push()

console.log(arr3)
