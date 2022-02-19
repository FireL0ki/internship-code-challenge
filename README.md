# LogicGate Software Engineering Internship Challenge

## Summary

LogicGate recently bought a farm that has many different colored barns containing an assortment of animals. Farmer Kunkel would like to improve efficiency at the farm by ensuring that the animals are evenly distributed across all barns. He also wants to keep the animals happy by putting them in their favorite color barns. There are a number of requirements that Farmer Kunkel must adhere to when distributing animals which are listed below.

## Requirements

Using the animals.json file, evenly distribute the animals into each barn by the color of the barn they are associated with. For example, a goat may be associated with the color green, so this goat can only be distributed to green barns.  Barns have a maximum capacity of 4 animals per barn.  The distribution difference between each barn of the same color cannot be greater than one.   

For example, if there are 11 animals with the favorite color blue and 3 blue barns, there should be 4 in the first and second and 3 in the third. Output a valid JSON that describes the state of each barn.

Please describe every methods (functions) and any classes created with additional code comments.


## Example output JSON format

    [
      {"barn": "Barn_Green", "animals":["Duck"]},
      {"barn": "Barn_Green_2", "animals":["Goat"]},
      {"barn": "Barn_Brown", "animals":["Goat","Duck"]}
    ]

## Bonus

### Unit Tests

Create unit tests that validate's your program's output. Aim for ~85% test coverage.

### Error/Edge case Handling

* Handle a case where not every animal fits into a barn
* Throw an exception and halt the program if the input JSON is not properly formatted

## Submission
To submit this challenge, please edit the README file to include instructions on how to run the challenge. 

After this, ZIP the challenge and submit it to the email that you received the challenge from. 


## My Approach to the Challenge

I started by making a list of comments at the top of the document to break down the tasks I need to do.
Then I wrote out some pseudo code to roughly outline the logic the different parts of my program would follow.
Then, I wrote out the code that made the most sense for my brain, and made alterations & adjustments from there for efficiency and readability.

I spent a lot of time googling different functions in JavaScript, and refamiliarizing myself with concepts I learned, and learning new ways of approaching it.
When I got stuck, I either spoke the code out loud to myself, or found other people to speak it out loud to.


**It took me some time to figure out what the challenge wanted, in terms of language, structure, etc. 
For example: whether the challenge wanted me to connect to the json file in a specific way. 
I ended up deciding to simply put it in a variable in my .js file, so I could dive into the challenge.


I started out a lot of for loops, but I ended up with a lot of repetitive and long code.
I worked with trying to create useable functions, and after getting stuck on creating dynamic variable names, looked back at loops.
I talked over this with a mentor, and she encouraged me to try to focus on cutting down the loops- so
I decided to shift to exploring the forEach loop, and was able to use that to cut down on repetitive code
through use of a variable (barnColor)

When building my code for working on dividing the animals between more barns, my mentor pointed me toward looking at the slice() menthod,
when I had been looking at splice(). After experimenting with them, and reading up on the documentation, I went with slice() because 
I realized splice() manipulated the original array.

One of the errors I ran into was with using slice(); on first read, I though the documentation was saying the first number was for start index,
and the second was for an int / how many it should grab after the index. This led to my arrays not populating properly, and I was able to catch it
after some troubleshooting, that the second number was meant to be for an end index.

Much of my troubleshooting involved utilizing console.log() frequently at every step of the code, especially when I was having trouble
pinning down where an error was occuring. I also frequently spoke my code out loud to myself, explaining step by step exactly what 
I wanted it / expected it to do. I utilized Google as a resource, frequently using MDN Web Docs, and often reading other peoples' questions / responses
on stack overflow.


I wanted to continue, but needed to balance this work with my current coursework, so was unable to go further on even distribution (difference of no more than 1)-- 
If I had more time, I was looking at approaching it by looking at remainders, at re-divvying animals each time there was overflow 
(re-counting total animals, dividing out, and mathematically figuring out the best number of barns)


Overall, I learned a ton! I discovered many new methods, learned even more about my code process approach, and gained a bunch of tools that I will take forward in my work.


## To Run this Challenge:
Run via terminal with command: node main.js