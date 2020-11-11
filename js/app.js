/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/* I have created a global variable below and will assign a new game object to 
it in the vent listener below, this means the global variable will hold 
the game object which other objects, in this case the phrase objects can
access */

let game = null;
let wrongButton = '';
let buttonPressed = '';
let gameStart = document.querySelector('#btn__reset');
const keyboard = document.querySelector('#qwerty');

/* This event listener on the start game button will instantiate an
 object from the Game class and place it in the game object I have 
 declared above    */

gameStart.addEventListener('click', () => {
  game = new Game();
  game.startGame();
});

/* This is the event listener for the keyboard buttons */

keyboard.addEventListener('click', (e) => {
  if (e.target.tagName == 'BUTTON') {
    buttonPressed = e.target;
    let letter = e.target.textContent;
    wrongButton = e.target;
    e.target.classList.add('chosen');
    game.handleInteraction(letter);
  }
});

/* The code below allows you to enter guesses on the keyboard
 using the key method */

document.body.addEventListener('keyup', (e) => {
  let keyboardButton = document.querySelectorAll('.key');
  keyboardButton.forEach((key) => {
    if (key.textContent == e.key) {
      buttonPressed = key;
      let letter = e.key;
      wrongButton = key;
      key.classList.add('chosen');
      if (buttonPressed.disabled == !true) {
        game.handleInteraction(letter);
      }
    }
  });
});
