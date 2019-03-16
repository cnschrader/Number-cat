// Creat variables for the counters. Wins, Losses, etc. 

var counter = 0;
var score = 0;

var catNumberOne = $("#catNumberOne");
var catNumberTwo = $("#catNumberTwo");
var catNumberThree = $("#catNumberThree");
var catNumberFour = $("#catNumberFour");
var playerScoreArea = $("#playerScoreArea");
var winCounter = $("#winCounter");
var lossCounter = $("#lossCounter");
var goalArea = $("#goalArea");


// Make an array for the number values of the crystals (1 - 19).



// look up how to make an array work without having to type a bunch of numbers



// Make a loop for the value given. Maybe inside the loop create the image tags, attach appropriate classes and ids, then append to the already exisiting div that has an id (think jquery for this.) .attr .data .append var -variable name- = $("<img>").

// var catNumberChoices;


var catChoicesArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

var catNumberChoices;



function reset() {
    // catNumberChoices = catChoicesArray[Math.floor(Math.random() * catChoicesArray.length)];
    //  catNumberOne = Math.floor(Math.random() * 12) + 1; 
    catNumberOne.data('myval', Math.floor(Math.random() * 12) + 1);
    catNumberTwo.data('myval', Math.floor(Math.random() * 12) + 1);
    catNumberThree.data('myval', Math.floor(Math.random() * 12) + 1);
    catNumberFour.data('myval', Math.floor(Math.random() * 12) + 1);
    console.log(catNumberOne.data('myval'));
    realNumber();
    score = 0;

};

function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}
var result = range(19, 120);
console.log(result);


reset();

realNumber();

var numberGoal;
function realNumber() {
    numberGoal = result[Math.floor(Math.random() * result.length)];
    console.log(numberGoal);
};




var wins = 1;
var losses = 1;
$(".catClick").on("click", function () {

    score += $(this).data("myval");

    if (score === numberGoal) {

        alert("Meow! You Won!");
        winCounter.text(wins);
        wins++
        reset();
        console.log(wins);

    }

    else if (score > numberGoal) {
        alert("you lose!");
        lossCounter.text(losses);
        losses++
        reset();
        console.log(losses);


    };

    playerScoreArea.text(score);
    console.log(numberGoal);

    goalArea.text(numberGoal);



});







// var numberGoal = N[Math.floor(Math.random() * N.length)];

// var numberGoal;
// var numberToMatchArray = [];
// function matchNumber(num){
//     for(var i = 0; i <= 120; i++){
//       (numberToMatchArray.push(num));
//       console.log(numberToMatchArray);



//     }

//   
// 






//   function matchNumber(num){
//     for(var i = 0; i <= 120; i++){
//         console.log(numberToMatchArray.push(num));
//     }

// };

// 





// });

// Make a reset funciton

// Make an event function for the on clicks.

// Make a function that will randomly select both a new number for the images and a new number to be guessed.





// if statements that determine whether you win or lose (include counters, and call functions for reset and new random numbers. check through console.log).

