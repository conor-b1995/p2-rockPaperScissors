let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let lizard = document.getElementById('lizard');
let spock = document.getElementById('spock');
let userChoice = document.getElementById('user-choice')
let compChoice = document.getElementById('comp-choice')


function game(usersPick) {
    let computerChoice = randomComputerChoice();
    
    // console.log(usersPick);
    // console.log(computerChoice);
    userChoice.innerHTML = usersPick;
    compChoice.innerHTML = computerChoice;
}

function randomComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock']

    const randomNumber = Math.floor(Math.random() * 5)

    return choices[randomNumber];
}

randomComputerChoice();


function usersOptions() {

    rock.addEventListener('click', function () {
        game('Rock')
    })

    paper.addEventListener('click', function () {
        game('Paper')
    })

    scissors.addEventListener('click', function () {
        game('Scissors')
    })

    lizard.addEventListener('click', function () {
        game('Lizard')
    })

    spock.addEventListener('click', function () {
        game('Spock')
    })

}

usersOptions();