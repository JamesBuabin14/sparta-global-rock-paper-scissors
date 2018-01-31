alert("Your browser challenges you to a game of Rock, Paper, Scissors!")

var loadup = prompt("Do you accept the challenge? (1)Yes (2)No");
if(loadup == 1){
  alert("Challenge accepted!")
} else {
  alert("Bye")
  throw "Exit";
};

var name = prompt("Hello, enter your name: ");
alert ("hello, " + name);

var choice = prompt("What do you choose? (1)Rock (2)Paper (3)Scissors");

if (choice == "1") {
  alert( name + "You have selected Rock");
}else if (choice == "2") {
  alert( name + "You have selected Paper");
} else if (choice == "3") {
  alert( name + "You have selected Scissors");
}

var move = ["Rock", "Paper", "Scissors"];

var rounds = "1;" //stores number of rounds
playerScore = "0"; //stores number of points score
compScore = "0"; //stores number of points score



var random= Math.floor(Math.random() *3); //Math.random generates a number between 0 and 1, that isn't a whole number, and also isn't 1. To get a number, for example between 0 and 3, multiply your answer by 3: To get it to be a whole number, apply Math.floor, which rounds down to the nearest whole number

switch (choice) {
  case "1":
  if (random = 0) {
    alert("You chose rock... Computer draws rock! Its a tie!");
  } else if (random = 1) {
  alert("You chose rock... Computer draws paper! You lose!");
  compScore =  compScore + 1;
} else alert ("You chose rock... Computer draws scissors! You win!");
playerScore =  playerScore + 1;

break;

  case "2":
  if (random = 0){
  alert("You have chosen paper... Computer draws rock! You win!");
  playerScore =  playerScore + 1;
}
  else if (random = 1) {
    alert("You have chosen paper... Computer draws paper! Its a draw!");
  }
    else alert ("You have chosen paper... Computer draws scissors! You lose!");
    compScore =  compScore + 1;
    break;


   case "3":
   if (random = 0){
     alert("You have chosen scissors... Computer draws rock! You lose! ");
     compScore =  compScore + 1;
   } else if (random = 1) {
     alert("You chose scissors... Computer draws paper! You win!");
     playerScore =  playerScore + 1;
   } else alert ("You have chosen scissors... Computer draws scissors! Its a draw!");
    break;
  default:
}

alert(name + playerScore + compScore);

var play = prompt('Would you like to play this game again?(y)Yes(n)no');
if (play =='n'){
  throw "gameover";//A function that ends the game goes here
} else if (play == 'y') {

}

if(playerScore>compScore) { //It the total of the player score is abovve the computer score display alert
  alert(name + " is the winner!!");
} else if (cpuScore>userScore) { //It the total of the computer score is abovve the player score display alert
    alert(Unfortunately + name + "You did not win... GAME OVER!");
  }
