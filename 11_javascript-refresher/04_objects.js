//how to make an object (commonly used in json)
const aboutMe = {
    name: "Vincent",
    age: 20,
    course: "BSIS"
}

//accessing object properties
function introduce(obj) {
    console.log("Hello, my name is",obj.name, "and I am", obj.age, "years old.");
}

introduce(aboutMe);

//adding new properties to an object
aboutMe.hobby = "Gaming";

console.log(aboutMe)

