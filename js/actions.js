function handleShuffleButtonClick() {
  if (lettersToSubmit.length) {
    doVerticalBounce($(this));
  } else {
    clearLetterButtons();
    shuffleArray(LETTERS_USED);
    renderLetterButtons();
  }
}

function handleLetterButtonClick() {
  if (!$(this).hasClass("active")) {
    addLettersToSubmit($(this).text());
    $(this).addClass("active");
  } else {
    doVerticalBounce($(this).parent());
  }
}

function handleHintButtonClick() {
  renderPuzzleHints();
}

function handleSubmitText(e) {
  e.preventDefault();
  if (!lettersToSubmit) return;

  if (isWordInPuzzle(lettersToSubmit)) {
    showLetters(lettersToSubmit);
    resetLettersToSubmit();
    clearSelectedLetterButtons();
  } else {
    doHorizontalBounce($(".letters-to-submit"), () => {
      resetLettersToSubmit();
      clearSelectedLetterButtons();
    });
  }
}
