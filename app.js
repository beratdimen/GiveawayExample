// Giveaway Application

debugger;
giveaway();

while (true) {
    let rePlay = prompt("Would you like to play again?\n if Yes press e \n if No  press h");
    
    if (rePlay == "e" || rePlay == "E") {
        giveaway();

    } else if (rePlay == "h" || rePlay== "H") {
        console.log("Thanks for your participation.");
        break;
    } else {
        console.log("An error occurred");
        break;
    }   
}
function giveaway() {
    let number = Number(prompt("Please enter your number between 1-10"));
    let winner = [];
    let losed = [];

    let random = (Math.floor(Math.random() * 11));
    console.log(random);

    if (random == number) {
        alert("Congratulations You Won");
        winner.push(number);
    } else {
        alert("Unfortunately You Didn't Win,\n Giveaway result:" + random);
        losed.push(number);
    }

    console.log("Winning Giveaway:" + winner);
    console.log("Losed Giveaway:" + losed);
}