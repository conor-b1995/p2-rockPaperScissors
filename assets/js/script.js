let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let lizard = document.getElementById('lizard');
let spock = document.getElementById('spock');

function game(usersPick) {
    console.log(usersPick)
}

function randomComputerChoice() {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock']

    const randomNumber = Math.floor(Math.random() * 5)

    console.log(randomNumber)
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
        game('Liazrd')
    })

    spock.addEventListener('click', function () {
        game('Spock')
    })

}

usersOptions();