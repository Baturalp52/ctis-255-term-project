function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

function resetLettersToSubmit() {
  lettersToSubmit = "";
  renderLettersToSubmit();
}

function addLettersToSubmit(letter) {
  lettersToSubmit += letter;
  renderLettersToSubmit();
}

function isWordInPuzzle(word) {
  return Object.keys(WORD_LOCATIONS).includes(word);
}

function clearSelectedLetterButtons() {
  $(".footer > .letter-button-container > .active").removeClass("active");
}

function showLetters(word) {
  const isFound = foundWords.includes(word);
  if (!isFound) foundWords.push(word);
  const { startRow, endRow, startCol, endCol } = WORD_LOCATIONS[word];
  for (let row = startRow; row <= endRow; row++)
    for (let col = startCol; col <= endCol; col++) {
      const element = $(
        `#puzzle-body > tr:nth-of-type(${row}) > td:nth-of-type(${col})`
      );

      if (!isFound) {
        element
          .removeClass("hinted")
          .addClass("active")
          .text(word[Math.abs(startRow - row) + Math.abs(startCol - col)]);
      } else {
        flashEffect(element);
      }
    }
}
