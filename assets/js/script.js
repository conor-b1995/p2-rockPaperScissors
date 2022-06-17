let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let lizard = document.getElementById('lizard');
let spock = document.getElementById('spock');
let userChoice = document.getElementById('user-choice');
let compChoice = document.getElementById('comp-choice');



function youWin() {

    console.log('You Win');
  
}

function youLose() {

    console.log('You Lose');

}

function draw() {

    console.log('Its a Draw');
    
}


function game(usersPick) {

    let computerChoice = randomComputerChoice();

    switch (usersPick + computerChoice) {
        case 'RockScissors':
        case 'RockLizard':
        case 'PaperRock':
        case 'PaperSpock':
        case 'ScissorsPaper':
        case 'ScissorsLizard':
        case 'LizardPaper':
        case 'LizardSpock':
        case 'SpockRock':
        case 'SpockScissors':
            youWin();
            break;
        case 'ScissorsRock':
        case 'LizardRock':
        case 'RockPaper':
        case 'PaperSpock':
        case 'PaperScissors':
        case 'LizardScissors':
        case 'PaperLizard':
        case 'SpockLizard':
        case 'RockSpock':
        case 'ScissorsSpock':
            youLose();
            break;
        case 'RockRock':
        case 'PaperPaper':
        case 'ScissorsScissors':
        case 'LizardLizard':
        case 'SpockSpock':
            draw();
            break;
    }

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