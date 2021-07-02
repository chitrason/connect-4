//connect 4 psudeocode
// 1) define variables used to track the state of the game (playerTurn, gameBoard, isWinner, etc ...), . 
    // figure out how to make the gameboard

// 2) store cached element references to connect javascript constants to elements on HTML page (gameBoard , gameMessage, whoseTurn)


// 3) create an initializing function to clear the board and necessary state variables

// create start button and clicked (init), prompt for player names and board appears

// create a function that determines who goes first

// create timer function for after player names are entered is pressed

// 4) create function render to apply changes to where in the gameBoard array the current player is going to drop their game piece.  Within this function i should have some logic that the game piece will go to the bottom of the column depending on if there is a game piece there or not.
// if statmente for if isWinner = false then it is player 1 or 2 turn, if all the spots on the board are not null then it is a 'T' or announce the winner
// display a message for whose turn it is. prompt for player names
// display game state. whose turn it is, win, tie

// 5)  after each click, a checkWinner function to check for winning combinations of 4.  I want to include an easteregg to check for 5 in a row
// also start timer for the next person . -Winning cominations

// 6) define constants. create draw function (gameBoard = !null) is a Tie

// 8) create a reset button that re-initializes the game state / board / variables

//wireframe: https://wireframe.cc/qUCucN

// SUPER BONUS: 
// keep track of who's the winner

// or create an indexing piece dropper?

/*------Constants------*/
const winningCombinations = []
/*------Variables (state)------*/
let gameBoard, isWinner, playerTurn
/*------Cached Element References------*/
const gameBoardEl = document.querySelectorAll('div')
const resetBtn = document.querySelector('#restart')
const messageEl = document.querySelector('#gameMessage')

/*------Event Listeners------*/
gameBoardEl.forEach((spot) => {
    spot.addEventListener('click', handleClick)
})

/*------Functions------*/

function handleClick(spot) {
    console.log('clicked')
    let spotNum = spot.target.id
    console.log(spotNum)
}