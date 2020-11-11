/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
let phraseLetters = document.getElementsByClassName('letter');
let letterFound = false;
let letterToShow = [];

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
  addPhraseToDisplay() {
    let ul = document.querySelector('#phrase ul');
    for (let i = 0; i < game.activePhrase.phrase.length; i++) {
      if (game.activePhrase.phrase[i] != ' ') {
        ul.innerHTML += `
                <li class = "hide letter ${game.activePhrase.phrase[i]}">${game.activePhrase.phrase[i]}</li>`;
      } else {
        ul.innerHTML += `
                <li class = "hide space">${game.activePhrase.phrase[i]}</li>`;
      }
    }
  }

  checkLetter(letter) {
    letterFound = false;
    for (let i = 0; i < phraseLetters.length; i++) {
      if (phraseLetters[i].textContent.toLowerCase() == letter) {
        letterFound = true;
        letterToShow.push(phraseLetters[i]);
      }
    }
  }

  showMatchedLetter() {
    for (let i = 0; i < letterToShow.length; i++) {
      letterToShow[i].classList.remove('hide');
      letterToShow[i].classList.add('show');
    }
  }
}
