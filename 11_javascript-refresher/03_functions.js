// Function declaration
function greet(name) {
    console.log("Hello, " + name + "!")
}

// Arrow function
const square = (num) => {
    console.log(num * num)
    //can also be written as: return num * num
}

// Function with multiple parameters
function calculator(a, b) {
    console.log("Addition: ", a + b)
    console.log("Product: ", a * b)
    //can also be written as: return {sum: a + b, product: a * b}
}

greet("Vincent")
square(5)
calculator(10, 5)