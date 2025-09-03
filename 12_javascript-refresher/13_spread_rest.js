const numbers = [1, 2, 3];
const number2 = [4, 5, ...numbers]

const user = { name: "Vincent", age: 20 }; 
const extended = { ...user, hobby: "jogging"}

function add(...args) {
    return args.reduce((total, num) => 
        total + num, 0
    );
}
//outputs
console.log(number2)
console.log(extended)
console.log(add(1,2,3))