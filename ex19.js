/*In this exercise we will be writing an algorithm, to detect if two queens on a chess board can attack each other.

Queen Threat Detector
A game of chess is played on an 8 column by 8 row board. In the game of chess, a queen can attack pieces which are on the same row, column, or diagonal.

Chess Board Queen

In JavaScript, we can represent a chessboard using an 8 by 8 array (8 arrays within an array). For this exercise, our chess board will have 2 queens, and nothing else. A 1 in the array represents a queen on the corresponding square, and a O in the array represents an unoccupied square.

So the following chess board:

chess board example

Would be represented in JavaScript like this:

[
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
Our first challenge will be to write a function that generates a chess board like this. We will then write a function to detect weather or not the two queens are positioned so that they attack each other.

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
Expected Output
[
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
true

Input
let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
Expected Output
[
  [1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
false

Instruction
Create a function generateBoard which will return a nested array representing the board, containing the location of two queens.
Create a function called queenThreat that will indicate whether or not the two queens are positioned so that they attack each other.
*/

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let columnArr = [0, 0, 0, 0, 0, 0, 0, 0];
let boardArr = [];

function generateBoard(whiteQueen, blackQueen) {
  let board = [];

  for (let i = 0; i < 8; i++) {
    let row = [];
    for (let j = 0; j < 8; j++) {
      row.push(0);
    }
    board.push(row);
  }
  board[whiteQueen[0]][whiteQueen[1]] = 1;
  board[blackQueen[0]][blackQueen[1]] = 1;

  return board;
}

function queenThreat(generatedBoard) {
  let queenPosition = [];

  for (let i = 0; i < generatedBoard.length; i++) {
    for (let j = 0; j < generatedBoard[i].length; j++) {
      if (generatedBoard[i][j] == 1) {
        queenPosition.push({ row: i, col: j });
      }
    }
  }

  // horizontal
  if (queenPosition[0].row === queenPosition[1].row) {
    return true;
  }
  // Vertical
  if (queenPosition[0].col === queenPosition[1].col) {
    return true;
  }

  // diagonal
  const rowPosition = queenPosition[1].row - queenPosition[0].row;
  const colPosition = queenPosition[1].col - queenPosition[0].col;

  let rowA = queenPosition[0].row;
  let colA = queenPosition[0].col;
  const colLength = generatedBoard.length;
  const rowLength = generatedBoard[rowA].length;

  console.log(rowA, colA);
  console.log(colLength, rowLength);

  if (rowPosition < 0) {
    if (colPosition < 0) {
      while (rowA > -1 && colA > -1) {
        if (rowA == queenPosition[1].row && colA == queenPosition[1].col) {
          return true;
        }
        rowA--;
        colA--;
      }
    } else {
      while (rowA > -1 && colA < colLength) {
        if (rowA == queenPosition[1].row && colA == queenPosition[1].col) {
          return true;
        }
        rowA--;
        colA++;
      }
    }
  } else {
    if (colPosition < 0) {
      while (rowA < rowLength && colA > -1) {
        if (rowA == queenPosition[1].row && colA == queenPosition[1].col) {
          return true;
        }
        rowA++;
        colA--;
      }
    } else {
      while (rowA < rowLength && colA < colLength) {
        if (rowA == queenPosition[1].row && colA == queenPosition[1].col) {
          return true;
        }
        rowA++;
        colA++;
      }
    }
  }
  return false;
}

//testcode 1
whiteQueen = [0, 5];
blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
generatedBoard.forEach((a) => {
  console.log(`[${a.join(",")}]`);
});
console.log(queenThreat(generatedBoard));
// Expected Output
// [
//   [0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [1, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0]
// ]
// true

//testcode 2
whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
generatedBoard.forEach((a) => {
  console.log(`[${a.join(",")}]`);
});
console.log(queenThreat(generatedBoard));
// Expected Output
// [
//   [1, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 1],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0]
// ]
// false
