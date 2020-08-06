const readline = require("readline-sync");
const name = readline.question("What is your name? ");

const choice = readline.question('You have found yourself locked in a room which you must escape. ' + name + ' which option would you like to choose? Put hand in hole, Find the key, or Open the door ? ')


function gameResults() {
    
    if (choice === 'Find the key') {

        const secondChoice = readline.question(name + 'Which option would you like to choose next? Put hand in hole, or Open the door? ')
        if ( secondChoice === 'Open the door') {
            console.log("You have escaped" + name + ". You are the WINNER")
        }else {
            console.log("Rest in Peace" + name + " . You have died.")
        }
    } else if (choice === 'Open the door') {
        let secondChoice = readline.question ('Which option would you like to choose next? Put hand in hole, or Find the key? ')
        if (secondChoice === 'Find the key') {
                const secondChoice = readline.question('Which option would you like to choose next? Put hand in hole, or Open the door? ')
             if ( secondChoice === 'Open the door') {
                console.log("You have escaped " + name + " You are the WINNER")
            }else {
             console.log("Rest in Peace " + name + ". You have died.")
        }
        }
    } else {
        console.log("Rest in Peace " + name + ". You have died.")
    }

}
console.log(gameResults())


