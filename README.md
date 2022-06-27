# Rock Paper Scissors Lizard Spock

Rock Paper Scissors Lizard Spock is a a twist on the classic game of Rock Paper Scissors which originated on the show The Big Bang Theory. The purpose of the game is to entertain both new and returning users by allowing them to compete against the computer, where the first to win 10 rounds wins the overall game. For a first time user there is a rule section which clearly indicates all winning scenarios for each selection. The figure needed for the user or computer is displayed clearly in a paragraph below the rules. The game also validates the user inputs (rock, paper, scissors, lizard or spock) and gives feedback to the user where needed. Feedback is provided for each round with text and the score board is updated after each round increasing the score of the user score or the computer score depending on who wins the round. Feedback is also provided at the end of the game by an end of game modal which pops up announcing the winner and gives the user the chance to play again.

## User Experience (UX)
### User Stories

* As a user, I want to play a game that has elements of chance.
* As a user, I want to be able to see the rules of the game.
* As a user, I want to see feedback on mine and the computers choice.
* As a user, i want to see whos won the round.
* As a user, I want to see the scores incrementing for whoever won the round. 
* As a user, I would like the oppurtunity to play again when the game is over.

## Features
### Title
*   The title text is very clear and concise and the top and center of the page.
*   The title stays prominant and clear on all screen sizes.
![Title](assets/images/title.jpg)
### Taglines and Rules Button
* When the player opens homepage, they are met with the tagline "Think you can beat the computer?" and "Make you decision...carefully" underneath the title.
* This intrigues the user, but also lets them know that the gameplay is based on choices.
* In this section it also lets the user know how many points (rounds) it takes to win the game.
* The rules modal box pops up whenever the user clicks the rules button.
* The rules button has yellow shadowing behind to add to the effect that it is a button.
![Taglines](assets/images/taglines.jpg)
### Rules Modal
* The rules modal displays all the possible ways of winning a round of the game. 
* The X in the top right corner of the modal when clicked will close the modal and return you to the game screen.
![Rules modal](assets/images/rules-content.jpg)
### User Options (Rock, Paper, Scissors, Lizard, Spock)
* This section has all possible selections the user can make.
* The buttons when hovered over gradually change to the color pink to indicate to the user that this is the selection they are about to make.
* Each button icon matches the icons in the rules modal so the user knows which icon is which.
![User Options](assets/images/user-options.jpg)
### User and Computer Selections 
* This section displays what option the user has selected and also the random selection of the computer.
![User and computer selections](assets/images/user%26comp-selection.jpg)
### Round Feedback
* The round feedback section displays which selection has won out of the user selection and computer selection.
* It also displays a tagline to clarify whether the user or computer has won the round.
![Round feedback](assets/images/round-feedback.jpg)
### Score Board
* Displays the number of rounds won by the user and computer so user can see how close they are to a victory or a loss.
* Once the user or computer reach the max score of 10 an end of game modal will pop up.
![Score board](assets/images/score-board.jpg)
### End Game Modal
* The end game modal pops up when either the user or computer has reached a score of 10.
* The modal announces who has won the game.
* The modal includes a 'Play Again' button which when clicked will reset the game and you can start the game again. 
![End game modal](assets/images/end-game-modal.jpg)
### Future Features
* I'd like to implement a username input to make the game more personilsed.
* Also to add a leaderboard that would tally up all the games you won and put your username beside your score.


## Solved Bugs
* I came across a problem with the user and computer scores not incrementing after the first round of selections. To fix this I simply changed the javascript code from userPoints++ to ++userPoints and the same switch for the computer points.
* I had a problem with the rules modal not appearing on top of the rest of the content and to fix this i set the z-index to 1.
## Testing

## Deployment

## Credits

