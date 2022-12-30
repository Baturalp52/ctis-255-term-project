function renderPuzzle() {
  PUZZLE.forEach((letterRow) => {
    const row = $("<tr></tr>");
    letterRow.forEach((letter) => {
      const letterBox = $("<td></td>");
      if (letter) letterBox.addClass("filled");
      else letterBox.addClass("blank");
      row.append(letterBox);
    });
    $("#puzzle-body").append(row);
  });
  $(".root").css("width", PUZZLE[0].length * LETTER_BOX_SIZE + "px");
}

function renderPuzzleHints() {
  PUZZLE.forEach((letterRow, rowIndex) => {
    letterRow.forEach((letter, colIndex) => {
      if (!letter) return;

      const letterBox = $(
        `#puzzle-body > tr:nth-of-type(${rowIndex + 1}) > td:nth-of-type(${
          colIndex + 1
        })`
      );
      if (letterBox.hasClass("active")) return;
      if (!letterBox.hasClass("hinted")) {
        letterBox.text(letter).addClass("hinted");
      } else {
        letterBox.removeClass("hinted");
        letterBox.on(
          "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",
          () => {
            letterBox.text("");
            letterBox.unbind(
              "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd"
            );
          }
        );
      }
    });
  });
}

function renderLetterButtons() {
  const angularDelimeter = (2 * Math.PI) / LETTERS_USED.length;
  const originDiff = ($(".footer").width() - 60) / 2;

  LETTERS_USED.forEach((letter, index) => {
    const letterButton = $(
      `<div class="letter-button-container"><button class="letter-button" type="button">${letter}</button></div>`
    );
    $(".footer").prepend(letterButton);
    letterButton.animate({
      left: "+=" + Math.cos(angularDelimeter * index) * originDiff + "px",
      top: "+=" + Math.sin(angularDelimeter * index) * originDiff + "px",
    });
  });
}

function clearLetterButtons() {
  $(".footer > .letter-button-container").remove();
}

function renderLettersToSubmit() {
  $(".letters-to-submit").remove();
  if (!lettersToSubmit) return;
  const lettersToSubmitEl = $('<div class="letters-to-submit"></div>');
  lettersToSubmitEl.text(lettersToSubmit);
  $(".footer").append(lettersToSubmitEl);
}
