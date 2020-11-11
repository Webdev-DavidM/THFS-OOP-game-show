/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

const overlay = document.querySelector('#overlay');

class Game {
  constructor() {
    this.phrases = this.createPhrase();
    this.missed = 0;
    this.activePhrase = null;
  }

  getRandomPhrase() {
    let randomNumber = Math.floor(Math.random() * 5);
    return this.phrases[randomNumber];
  }

  /* Below I am creating an array with 1 new objects in it */

  createPhrase() {
    return (this.phrases = [
      new Phrase('Some like it hot'),
      new Phrase('I dont give a damn'),
      new Phrase('Its alive'),
      new Phrase('Heres johnny'),
      new Phrase('My precious'),
    ]);
  }

  startGame() {
    overlay.style.display = 'none';

    /* This sets the active phrase to the result of the getRandomPhrase
which choose a random object from the create phrase array. The property
this activePhrase is now the phrase object and to apply any of the 
properties or methods of the phrase object i need to add them onto the end
of ActivePhrase sow within this class it will be this.activePhrase.phrase or from
another class game.activePhrase.phrase*/

    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  handleInteraction(letter) {
    buttonPressed.disabled = true;
    this.activePhrase.checkLetter(letter);
    if (!letterFound) {
      wrongButton.classList.add('wrong');
      this.removeLife();
    }
    if (letterFound) {
      buttonPressed.classList.add('chosen');
      this.activePhrase.showMatchedLetter(letter);
      if (this.checkForWin()) {
        this.gameOver(true);
      }
    }
  }

  checkForWin() {
    let hiddenLetters = document.querySelectorAll('.show');
    let space = document.querySelectorAll('.space');
    let foundLetters = hiddenLetters.length + space.length;
    if (foundLetters >= game.activePhrase.phrase.length) {
      return true;
    } else {
      return false;
    }
  }

  removeLife() {
    this.missed += 1;
    let heart = document.querySelectorAll("img[src='images/liveHeart.png']");
    heart[0].src = 'images/lostHeart.png';
    if (this.missed == 5) {
      this.gameOver(false);
      this.resetGame();
    }
  }

  gameOver(gameWon) {
    overlay.style.display = 'flex';
    if (!gameWon) {
      overlay.classList = 'lose';
      let gameOver = document.querySelector('h1');
      gameOver.textContent = 'Game over!';
      this.resetGame();
    } else {
      overlay.style.display = 'flex';
      overlay.classList = 'win';
      let win = document.querySelector('h1');
      win.textContent = 'You won, well done!';
      this.resetGame();
    }
  }

  resetGame() {
    /* add hearts */
    let ol = document.querySelector('#scoreboard ol');
    ol.innerHTML = ' ';
    for (let i = 1; i < 6; i++) {
      ol.innerHTML += `<li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>`;
    }
    /* remove the old letters */
    let ul = document.getElementById('ul');
    ul.innerHTML = ' ';

    let wrong = document.querySelectorAll('.wrong');
    for (let i = 0; i < wrong.length; i++) {
      wrong[i].classList.remove('wrong');
    }
    let chosen = document.querySelectorAll('.chosen');
    for (let i = 0; i < chosen.length; i++) {
      chosen[i].classList.remove('chosen');
    }
    let disabledButtons = document.querySelectorAll(':disabled');
    disabledButtons.forEach((button) => (button.disabled = false));
  }
}
