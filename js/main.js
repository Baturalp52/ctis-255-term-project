var lettersToSubmit = "";
var foundWords = [];

$(function () {
  renderPuzzle();
  shuffleArray(LETTERS_USED);
  renderLetterButtons();

  $("body").on("contextmenu", handleSubmitText);

  $(".shuffle-button").on("click", handleShuffleButtonClick);
  $(".hint-button").on("click", handleHintButtonClick);
  $(".footer").on("click", ".letter-button", handleLetterButtonClick);
});
