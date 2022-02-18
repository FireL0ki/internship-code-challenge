
let barnAnimalsArray =
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

/*  1. Iterate over array of objects (livestockArray) & pull the barn colors (green, blue, red, black, brown). Make each barn color into its own array.
    2. Iterate over livestockArray. Where ["barn"] = color, retrieve the element in the value attached to the animal key.

        a. check if barn{color} array has space ( is < 4 in size (.length() ), otherwise, create a new barn of that color and add the animal to it.) 
            -- make sure to check other barn multiples of each color!
            i. if ({color}Barn.length() >= 4) {
                 let {color}Barn_2 = []
                 {color}Barn_2.push("(animal)")
            } else {
                {color}Barn.push("(animal)")
            }

    3. Once animal distributions have occurred, check barns of each color to make sure there is not a difference in animal number (.length()) of more than 1 between them
    4. How do I ouput this data as JSON again?
*/

let barnAnimals = barnAnimalsArray["livestock"];

// console.log("TEST")
// for (let i = 0; i <= barnAnimals.length; i ++) {
//     console.log(barnAnimals[i].barn)
// }


// create a barn for each favorite color
let greenBarn = [];
let blueBarn = [];
let redBarn = [];
let blackBarn = [];
let brownBarn = [];

for (let i = 0; i <= barnAnimals.length; i++) {
    if (barnAnimals[i]?.barn == "Green") {
        greenBarn.push(barnAnimals[i]?.animal)
    }
}

for (let i = 0; i <= barnAnimals.length; i++) {
    if (barnAnimals[i]?.barn == "Blue") {
        blueBarn.push(barnAnimals[i]?.animal)
    }
}

for (let i = 0; i <= barnAnimals.length; i++) {
    if (barnAnimals[i]?.barn == "Red") {
        redBarn.push(barnAnimals[i]?.animal)
    }
}

for (let i = 0; i <= barnAnimals.length; i++) {
    if (barnAnimals[i]?.barn == "Black") {
        blackBarn.push(barnAnimals[i]?.animal)
    }
}

for (let i = 0; i <= barnAnimals.length; i++) {
    if (barnAnimals[i]?.barn == "Brown") {
        brownBarn.push(barnAnimals[i]?.animal)
    }
}



let numberRedBarns = redBarn.length / 4;

// can I dynamically create array names? Do I build an array of arrays and pull from there? Is this best done without a loop?
for (let i = 1; i <= numberRedBarns.length; i ++) {
    
}

// set up code to check the barn array lengths
if (redBarn.length >= 4) {   
}


if (redBarn.length % 4 == 3) {
}

if (redBarn.length % 4 == 2) {
}

if (redBarn.length % 4 == 1) {
}

if (redBarn.length % 4 == 0) {
}



//make animal sorting into a function
// function putAnimalsInMatchingBarn(color) {
//     for (let i = 0; i <= barnAnimals.length; i++) {
//         if (barnAnimals[i]?.barn == color) {
//             //-- how do I change the barn name with a variable?
//             colorBarn.push(barnAnimals[i]?.animal)
//         }
//     }
//     console.log(`${color} Barn: ${greenBarn}`);
// }

// putAnimalsInMatchingBarn("Green");
// putAnimalsInMatchingBarn("Blue");
// putAnimalsInMatchingBarn("Red");
// putAnimalsInMatchingBarn("Black");
// putAnimalsInMatchingBarn("Brown");