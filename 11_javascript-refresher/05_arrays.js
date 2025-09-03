const foods = ["Pork Sinigang", "Fried Chicken", "Corned Beef"];

//push method adds an item to the end of the array
foods.push("Beef Steak");

//shift method removes the first item in the array
foods.shift();

console.log(foods);

//using for loop to print each item in the array
for (let i = 0; i < foods.length; i++) {
    console.log((foods[i]));
}


//alternative way of using for loop with map method
foods.map((food) => {
    console.log("I like", food);
});
