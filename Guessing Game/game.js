//create secret number
var secretNumber = 4;
//ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

while (guess !== secretNumber) {
    //Check guess
    if (guess === secretNumber) {
        alert("You got it rigth!");
    }
    //check if guess is higher
    else if (guess > secretNumber) {
        alert("Go lower!");
    }
    //otherwise, check if lower
    else {
        alert("Go higher!!");
    }
}
