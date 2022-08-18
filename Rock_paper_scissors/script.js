var dict = new Object();
dict = {
    0: "Rock",
    1: "Paper",
    2: "Scissors"
}

function getComputerChoice(){
    let n = Math.floor(Math.random()*3);
    return n;
}

function userSelection() {
    let selection = prompt("Select: Rock, Paper, Scissors");
    selection = selection.toLowerCase();

    if (selection == "rock") {
        return 0;
    } else if ( selection == "paper") {
        return 1;
    } else if (selection == "scissors") {
        return 2;
    } else {
        console.log("Thats an invalid one!");
    }
}

function rules(playerS, computerS) {
    if (playerS == computerS) {
        console.log("Both players have chosen -" + dict[playerS] + "- it's a draw!");
    } else if((playerS == 0 && computerS == 2) ||
        (playerS == 1 && computerS == 0) || 
        (playerS == 2 && computerS == 1) 
    ){
        console.log("User Wins!!! " + dict[playerS] + " defeats " + dict[computerS]);
    } else {
        console.log("Computer wins... :C! " + dict[computerS] + " defeats " + dict[playerS]);
    }
}

let user = userSelection();
let computer = getComputerChoice();

user != undefined ? rules(user, computer) : console.log("The users input is invalid");