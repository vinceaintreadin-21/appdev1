const greet = (name) => {
    return "Hello, " + name
} //regular arrow function

console.log(greet('Vincent'))

const square = n => n * n //implicit return

console.log(square(6))

const sayHi = () => console.log('Hi') //no params

sayHi()