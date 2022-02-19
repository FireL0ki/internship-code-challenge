
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

let barnAnimals = barnAnimalsArray["livestock"];

// create object to store
let animalsByColor = {};

// iterate over barnAnimals array of objects, use barnColor variable to store the different barn colors as they are accessed
// this loop will place all the animals in their correct color barn arrays
barnAnimals.forEach( (animal) => {
    // set the barnColor variable to the element in the barn property in the current line
    const barnColor = animal.barn;
     // if property exists in animalsByColor (the specified color), push animal to key/property -- spread operator to not destroy data
    if (animalsByColor.hasOwnProperty(barnColor)) {
        const existingAnimals = animalsByColor[barnColor];
        animalsByColor[barnColor] = [...existingAnimals, animal.animal];
    } else {
        // if !exists,create new property, and push animal value to it
        animalsByColor[barnColor] = [animal.animal];
    }
} ); 


//variable to store max number of animals per barn
const maxAnimalNumber = 4;
const JSONObject = [];



// iterate over animalsByColor object. For each barn, divide by 4 (max number animals) to find out how many total barns are needed
// visual example of end goal: "Barn_Green_x":, ["animal", "animal", "animal"]
for (const barnColor in animalsByColor) {
    const animals = animalsByColor[barnColor];
    // find out numberOfBarns needed -- divide total animals by (max) 4 // use .ceil to round up any leftovers/remainders to get total barns
    const numberOfBarns = Math.ceil(animals.length / maxAnimalNumber);

    // loop to create each barn needed (number of times dictated by numberOfBarns discovered in previous step)
    for (let i = 1; i <= numberOfBarns; i++) {
        // create new sortedBarn object, use slice to grab specific animals from original array and move them into a new barn
        // slice(start index, end index) -- 
        const sortedBarn = {};
        // (i-1) * 4 is the equation that will start the index at the next correct spot for the next barn. (loop 1 needs to start at index 0, loop 2 needs to start at index 4, ...)
        const startIndex = (i-1)*maxAnimalNumber;

        // take sortedBarn object and set the barn property to the descriptive string (names the barn)
        sortedBarn.barn = `Barn_${barnColor}_${i}`;
        // take the animals in the sortedBarn object and slice up the array by increments of 4
        // use slice to pull items from original array without manipulating array data
        sortedBarn.animals = animals.slice(startIndex, startIndex + maxAnimalNumber);
        JSONObject.push(sortedBarn);
    }
}
console.log(JSONObject);