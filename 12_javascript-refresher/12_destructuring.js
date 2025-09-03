const person = {
    name: 'Vincent',
    age: 20
}

const {name, age} = person

console.log(name)

const hobbies = ['programming', 'overthinking']


const [hobby1, hobby2] = hobbies

console.log(hobby1)


function printName(person) {
    console.log(person.name)
}

printName(person)