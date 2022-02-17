
let livestockInformation =

{
    "livestock": [
        {"animal": "Goat", "barn": "Green"},
        {"animal": "Rabbit", "barn": "Blue"},
        {"animal": "Cow", "barn": "Red"},
        {"animal": "Calf", "barn": "Black"},
        {"animal": "Donkey", "barn": "Brown"},
        {"animal": "Duck", "barn": "Green"},
        {"animal": "Chicken", "barn": "Blue"},
        {"animal": "Pig", "barn": "Red"},
        {"animal": "Cat", "barn": "Black"},
        {"animal": "Dog", "barn": "Brown"},
        {"animal": "Chicken", "barn": "Green"},
        {"animal": "Duck", "barn": "Blue"},
        {"animal": "Rabbit", "barn": "Red"},
        {"animal": "Goat", "barn": "Black"},
        {"animal": "Rooster", "barn": "Brown"},
        {"animal": "Pig", "barn": "Green"},
        {"animal": "Horse", "barn": "Blue"},
        {"animal": "Donkey", "barn": "Red"},
        {"animal": "Cat", "barn": "Black"},
        {"animal": "Dog", "barn": "Brown"},
        {"animal": "Goat", "barn": "Red"},
        {"animal": "Pig", "barn": "Red"},
        {"animal": "Chicken", "barn": "Red"},
        {"animal": "Duck", "barn": "Red"},
        {"animal": "Cat", "barn": "Red"}
    ]
}


/*  evenly distribute the animals into each barn by the color of the barn they are associated with. 
For example, a goat may be associated with the color green, so this goat can only be distributed to green barns.  
Barns have a maximum capacity of 4 animals per barn.  
The distribution difference between each barn of the same color cannot be greater than one.   

For example, if there are 11 animals with the favorite color blue and 3 blue barns, 
there should be 4 in the first and second and 3 in the third. Output a valid JSON that describes the state of each barn.

Please describe every methods (functions) and any classes created with additional code comments. */

/*  1. Iterate over array of objects (livestockArray) & pull the barn colors (green, blue, red, black, brown). Make each barn color into its own array.
    2. Iterate over 

*/


let livestockArray = livestockInformation['livestock'];
// console.log(livestockArray)


console.log("TEST")
livestockArray.forEach(livestock => {
    for (let key in livestock) {
        console.log(`${key}: ${livestock[key]}`);
    }
})

// name this something else
let livestockArray = [];

livestockArray.forEach(livestock => {
    for (let key in livestock) {
        livestockArray.push(key, livestock[key])
    }
})


// create a barn for each favorite color
// update to cycle over array of objects and grab barn colors and create array for each
let greenBarn = [];
let blueBarn = [];
let redBarn = [];
let blackBarn = [];
let brownBarn = [];


// livestockArray.forEach(livestock => {
//     for (let key in livestock) {
//         if (value = "blue") {
//             blueBarn.push(key)
//         }
//     }
// })


// Retrieve animals (values attached to animal key) where barn is blue (where value attached to barn key = blue)
// Object.values(livestockArray).forEach(livestock => {
//     for()
// })


function getValuebyKey(object, key) {
    return Object.values(object).find(value => object[value] === key);
}

console.log("NEW ATTEMPT")
console.log(getValuebyKey(livestockArray,"blue"))


// livestockArray.filter(item => item.barn == 'blue')


console.log(`BLUE BARN ARRAY ${blueBarn}`);




