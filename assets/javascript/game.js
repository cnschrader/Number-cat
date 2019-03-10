// Creat variables for the counters. Wins, Losses, etc. 
var wins = 0;
var losses = 0;

var catNumberOne = $("#catNumberOne");
var catNumberTwo = $("#catNumberTwo");
var catNumberThree = $("#catNumberThree");



// Make an array for the number values of the crystals (1 - 19).

var catChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

// look up how to make an array work without having to type a bunch of numbers
var numberToMatch = [120];


// Make a loop for the value given. Maybe inside the loop create the image tags, attach appropriate classes and ids, then append to the already exisiting div that has an id (think jquery for this.) .attr .data .append var -variable name- = $("<img>").

for(var i = 0; i <= 120; i++){
    var currrentNumber = i;

}

// Make a reset funciton

// Make an event function for the on clicks.

// Make a function that will randomly select both a new number for the images and a new number to be guessed.
var catNumberChoices;

function catNumber(){
 catNumberChoices = catChoices[Math.floor(Math.random() * catChoices.length)];
 console.log(catNumber);
};




// if statements that determine whether you win or lose (include counters, and call functions for reset and new random numbers. check through console.log).

