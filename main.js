
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
    2. Iterate over livestockArray. Where ["barn"] = color, retrieve the element in the value attached to the animal key.
        a. 

        a. check if barn{color} array has space ( is < 4 in size (.length() ), otherwise, create a new barn of that color and add the animal to it.) -- make sure to check other barn multiples of each color!
            i. if ({color}Barn.length() >= 4) {
                 let {color}Barn_2 = []
                 {color}Barn_2.push("(animal)")
            } else {
                {color}Barn.push("(animal)")
            }

    3. Once animal distributions have occurred, check barns of each color to make sure there is not a difference in animal number (.length()) of more than 1 between them
    4. How do I ouput this data as JSON again?

*/

let livestockArray = livestockInformation['livestock'];

console.log("TEST")
livestockArray.forEach(livestock => {
    for (let key in livestock) {
        console.log(`${key}: ${livestock[key]}`);
    }
})


// make a function to iterate over the array, and pull the animals for each barn color and put them into the barn arrays
function getAnimalByColor(barnColor, ) {
    // iterate over
    livestockArray.forEach(livestock => {
        for (let key in livestock) {
            if (key == "barn") {
                (livestock[key])
            }
        }
    })
}

getAnimalByColor();



// name this something else
let livestockArray = [];

livestockArray.forEach(livestock => {
    for (let key in livestock) {
        livestockArray.push(key, livestock[key])
    }
})


// create a barn for each favorite color
let greenBarn = [];
let blueBarn = [];
let redBarn = [];
let blackBarn = [];
let brownBarn = [];

// update to cycle over array of objects and grab barn colors and create array for each


// create function to add animals to barns
// check if barn{color} array has space ( is < 4 in size (.length() ), otherwise, create a new barn of that color and add the animal to it.) 
// -- make sure to check other barn multiples of each color!
function addAnimalsToBarns() {
    // can I use a variable to store the color of the barn and concatonate it to the rest of the array title, or do I need to separately write out the barn types?
    if (barnColor + Barn.length() >= 4) {
                // create a new barn to hold the overflow animals -- how to make a new barn array name?
                 let {barnColor}Barn_2 = []
                 {barnColor}Barn_2.push(animal)
            } else {
                {barnColor}Barn.push(animal)
            }
        }


function getValuebyKey(object, key) {
    return Object.values(object).find(value => object[value] === key);
}

console.log("NEW ATTEMPT")
console.log(getValuebyKey(livestockArray,"blue"))





