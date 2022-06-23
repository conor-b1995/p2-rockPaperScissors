let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let lizard = document.getElementById('lizard');
let spock = document.getElementById('spock');
let userChoice = document.getElementById('user-choice');
let compChoice = document.getElementById('comp-choice');
let userPoints = 0;
let compPoints = 0;
let userScore = document.getElementById('user-score');
let compScore = document.getElementById('comp-score');


function youWin(user, computer) {

    userScore.innerHTML = userPoints++;
    document.getElementById('who-wins').innerHTML = `${user} beats ${computer}`;
    document.getElementById('message').innerHTML = "You beat the computer..you're a genius";

}

// youWin();

function youLose(user, computer) {

    compScore.innerHTML = compPoints++;
    document.getElementById('who-wins').innerHTML = `${computer} beats ${user}`;
    document.getElementById('message').innerHTML = 'The computer just destroyed you..embarrassing';

}

function draw() {

    document.getElementById('who-wins').innerHTML = 'Its a Draw';
    document.getElementById('message').innerHTML = '';


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
            youWin(usersPick, computerChoice);
            break;
        case 'ScissorsRock':
        case 'LizardRock':
        case 'RockPaper':
        case 'SpockPaper':
        case 'PaperScissors':
        case 'LizardScissors':
        case 'PaperLizard':
        case 'SpockLizard':
        case 'RockSpock':
        case 'ScissorsSpock':
            youLose(usersPick, computerChoice);
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

// randomComputerChoice();


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

var modal = document.getElementById('rules-content');
var btn = document.getElementById('btn-rules');
var close = document.getElementsByClassName('close')[0];

btn.onclick = function () {
        modal.style.display = 'block';
}

close.onclick = function () {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }