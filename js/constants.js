const PUZZLE = [
  [null, null, null, null, "T", "U", "N", "A"],
  [null, null, null, null, "U", null, null, "N"],
  ["N", "A", "T", "U", "R", "E", null, "T"],
  [null, "U", null, null, "N", null, null, null],
  [null, "N", null, null, null, null, null, null],
  [null, "T", "U", "N", "E", null, null, null],
];

const WORD_LOCATIONS = {
  NATURE: {
    startRow: 3,
    endRow: 3,
    startCol: 1,
    endCol: 6,
  },
  TURN: {
    startRow: 1,
    endRow: 4,
    startCol: 5,
    endCol: 5,
  },
  TUNA: {
    startRow: 1,
    endRow: 1,
    startCol: 5,
    endCol: 8,
  },
  ANT: {
    startRow: 1,
    endRow: 3,
    startCol: 8,
    endCol: 8,
  },
  AUNT: {
    startRow: 3,
    endRow: 6,
    startCol: 2,
    endCol: 2,
  },
  TUNE: {
    startRow: 6,
    endRow: 6,
    startCol: 2,
    endCol: 5,
  },
};

const LETTER_BOX_SIZE = 50;

const LETTERS_USED = PUZZLE.reduce((arr, letterArr) => {
  letterArr.forEach((letter) => {
    if (letter && !arr.includes(letter)) arr.push(letter);
  });
  return arr;
}, []);
